const express = require("express");
const fetch = require("make-fetch-happen");
const fs = require("fs");
const connection = require("../DB");
const router = express.Router();

// j'enlève les accents et je mets en minuscule
function normalizeText(text) {
    return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase()
}

// je fais une requête vers une API externe pour avoir les coordonnées d'un lieu
// uniquement si le lieu n'est pas enregistré dans "loc.json"
async function geoCoding(location, json) {
        const url = `https://nominatim.openstreetmap.org/search?q=${location}&format=json`;

        const res = await fetch(url);
        const data = await res.json();

        if (data.length === 0) {
            return null;
        }

        const result = [parseFloat(data[0].lat), parseFloat(data[0].lon)]
        
        json[normalizeText(data[0].name)] = result
        fs.writeFileSync("/usr/local/app/JSON/loc.json", JSON.stringify(json, null, 2));

        return result;
}

// je récupère la latitude et longitude
async function getLoc(location) {
    const cache = JSON.parse(fs.readFileSync("/usr/local/app/JSON/loc.json"));

    if (cache[location]) {
        console.log("ok");
        return cache[location];
    }

    return await geoCoding(location, cache);
}

// route
router.get("/grouped_posts/:start", async (req, res) => {
    try {
        const start = req.params.start;
        const minsalary = req.query.minsalary;
        const maxsalary = req.query.maxsalary;
        const location = req.query.location;
        const distance = req.query.distance;
        const contract = req.query.permanent;
        const remote = req.query.remote;
        const language = req.query.language;
        const experience = req.query.experience;
        const age = req.query.age;

        // j'initialise la latitude et longitude à null
        let lat;
        let lon;

        // si un lieu et une distance sont en paramètre
        // je récupère la latitude et longitude
        if (location && distance) {
            const coordinates = await getLoc(normalizeText(location))

            if (coordinates) {
                lat = parseFloat(coordinates[0]);
                lon = parseFloat(coordinates[1]);
            } else {
                console.error("Location not found");
                return res.status(500).json({msg: "Location not found"});
            }
        }
        
        const sqlSelectPoste = `
            SELECT 
                id_poste,
                display_name_fr,
                entreprise.nom_compagnie,
                skills,
                description,
                (salaire_min + salaire_max) / 2 AS salaire_moyen,
                CASE
                    WHEN NOW() - date_publication < INTERVAL '1 day'
                        THEN TO_CHAR(AGE(NOW(), date_publication), 'HH24"h"MI')

                    WHEN NOW() - date_publication < '2 day'
                        THEN TO_CHAR(AGE(NOW(), date_publication), 'DD "jour" HH24"h"MI')

                    ELSE 
                        TO_CHAR(AGE(NOW(), date_publication), 'DD "jours" HH24"h"MI')
                END AS since_posted
            FROM poste 
            JOIN entreprise ON poste.id_entreprise = entreprise.id_entreprise
            WHERE id_poste >= $1
            AND (
                $2::integer IS NULL
                OR salaire_min >= $2 
            )
            AND (
                $3::integer IS NULL
                OR salaire_max <= $3 
            )
            AND (
                $4::float8 IS NULL OR $5::float8 IS NULL OR $6::float8 IS NULL
                OR ST_DWithin(
                    geography(ST_MakePoint(longitude, latitude)),
                    geography(ST_MakePoint($4::float8, $5::float8)),
                    $6::float8 * 1000
                )
            )
            AND (
                $7::boolean IS NULL
                OR (poste.type_contrat::jsonb->>'permanent')::boolean = $7::boolean
            )
            AND (
                $8::text IS NULL
                OR poste.frequency_remote = $8::text
            )
            AND (
                $9::text IS NULL
                OR langues = $9::text
            )
            AND (
                $10::integer IS NULL
                OR annee_experience <= $10::integer
            )
            AND (
                $11::integer IS NULL
                OR date_publication >= NOW() - INTERVAL '1 day' * $11::integer
            )
            ORDER BY id_poste ASC
            LIMIT 15
        `;
        // paramètre ?? null signifie :
        // est-ce que ce paramètre existe ?
        // si non, je le mets null
        const selectPosteRequest = await connection.query(sqlSelectPoste, [
            start, 
            minsalary ?? null,
            maxsalary ?? null,
            lon ?? null,
            lat ?? null,
            distance ?? null,
            contract ?? null,
            remote ?? null,
            language ?? null,
            experience ?? null,
            age ?? null
        ]);

        if (selectPosteRequest.rows.length === 0) {
            console.log("0 post found");
            return res.status(200).json({msg: "0 post found"});
        }

        console.log("Posts found");
        return res.status(200).json(selectPosteRequest.rows);

    } catch (err) {
        console.error("Internal server error:", err);
        return res.status(500).json({msg: "Internal server error"});
    }
});

module.exports = router;