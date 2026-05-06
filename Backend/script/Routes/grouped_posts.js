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
                salaire_min,
                salaire_max,
                date_publication
            FROM poste 
            JOIN entreprise ON poste.id_entreprise = entreprise.id_entreprise
            WHERE id_poste >= $1
            AND (salaire_min >= $2 OR $2 IS NULL)
            AND (salaire_max <= $3 OR $3 IS NULL)
            AND (
                $4::float8 IS NULL OR $5::float8 IS NULL OR $6::float8 IS NULL
                OR ST_DWithin(
                    geography(ST_MakePoint(longitude, latitude)),
                    geography(ST_MakePoint($4::float8, $5::float8)),
                    $6::float8*1000
                )
            )
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
            distance ?? null
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