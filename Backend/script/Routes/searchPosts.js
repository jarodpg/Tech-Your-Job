const express = require("express");
const connection = require("../DB");
const router = express.Router();

router.get("/posts/search", async (req, res) => {
  try {
    const query = req.query.q;

    if (!query || query.trim() === "") {
      console.error('The query parameter "q" must be provided');
      return res
        .status(400)
        .json({ msg: 'The query parameter "q" must be provided' });
    }

    const FormattedQuery = `%${query.trim()}%`;

    const sqlSelectPosts = `
            SELECT
                id_poste,
                entreprise.nom_compagnie,
                poste.type_contrat,
                description,
                langues,
                remote_policy,
                frequency_remote,
                annee_experience,
                salaire_currency ,
                (salaire_min + salaire_max) / 2 || ' 000' AS salaire_moyen_annuel,
                recurrence,
                CASE
                    WHEN NOW() - date_publication < INTERVAL '1 day'
                        THEN TO_CHAR(AGE(NOW(), date_publication), 'HH24"h"MI')

                    WHEN NOW() - date_publication < INTERVAL '2 day'
                        THEN TO_CHAR(AGE(NOW(), date_publication), 'DD "jour" HH24"h"MI')

                    ELSE 
                        TO_CHAR(AGE(NOW(), date_publication), 'DD "jours" HH24"h"MI')
                END AS since_posted,
                categorie,
                display_name_en,
                display_name_fr,
                latitude,
                longitude,
                skills,
                titre,
                date_publication
            FROM poste 
            JOIN entreprise ON poste.id_entreprise = entreprise.id_entreprise
            WHERE 
                description ILIKE $1
                OR categorie ILIKE $1
                OR display_name_en ILIKE $1
                OR display_name_fr ILIKE $1
                OR (
                    jsonb_typeof(skills) = 'array'
                    AND EXISTS (
                        SELECT 1 
                        FROM jsonb_array_elements(skills) AS skill
                        WHERE skill->>'name' ILIKE $1
                    )
                )
                OR titre ILIKE $1
                OR entreprise.nom_compagnie ILIKE $1
                OR entreprise.seo_alias ILIKE $1
                OR entreprise.type_entreprise ILIKE $1
                OR $1 ILIKE ANY(entreprise.secteur_entreprise)
            ORDER BY date_publication DESC
        `;
    const selectPostsRequest = await connection.query(sqlSelectPosts, [
      FormattedQuery,
    ]);

    if (selectPostsRequest.rows.length === 0) {
      console.error("No post found");
      return res.status(404).json({ msg: "No post found" });
    }

    console.log("Posts found");
    return res.status(200).json(selectPostsRequest.rows);
  } catch (err) {
    console.error("Internal server error:", err);
    return res.status(500).json({ msg: "Internal server error" });
  }
});

module.exports = router;
