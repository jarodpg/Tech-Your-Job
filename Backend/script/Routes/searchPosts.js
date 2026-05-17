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

    const FormattedQuery = query.trim().split(/\s+/).join(" & ");

    const sqlSelectPosts = `
            WITH poste_and_dictionary AS (
                SELECT
                    *,
                    CASE 
                        WHEN langues = 'fr' THEN 'french'::regconfig
                        WHEN langues = 'en' THEN 'english'::regconfig
                        ELSE 'simple'::regconfig
                    END AS dictionary
                FROM poste
            )
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
                date_publication,
                ts_rank (
                    setweight(to_tsvector(dictionary, coalesce(titre, '')), 'A') ||
                    setweight(to_tsvector(dictionary, coalesce(display_name_en, '')), 'A') ||
                    setweight(to_tsvector(dictionary, coalesce(display_name_fr, '')), 'A') ||
                    setweight(to_tsvector(dictionary, coalesce(entreprise.nom_compagnie, '')), 'A') ||
                    setweight(to_tsvector(dictionary, coalesce(entreprise.seo_alias, '')), 'A') ||
                    
                    setweight(to_tsvector(dictionary, coalesce(description, '')), 'B') ||
                    setweight(to_tsvector(dictionary, coalesce(categorie, '')), 'B') ||

                    setweight(jsonb_to_tsvector(dictionary, coalesce(skills, '[]'::jsonb), '["string"]'), 'C') ||
                    
                    setweight(to_tsvector(dictionary, coalesce(entreprise.type_entreprise, '')), 'D') ||
                    setweight(to_tsvector(dictionary, coalesce(array_to_string(entreprise.secteur_entreprise, ' '), '')), 'D'),

                    to_tsquery(dictionary, $1::text)
                ) AS rank
            FROM poste_and_dictionary AS poste 
            JOIN entreprise ON poste.id_entreprise = entreprise.id_entreprise
            WHERE 
                to_tsvector(
                    dictionary,
                    coalesce(titre, '') || ' ' ||
                    coalesce(display_name_en, '') || ' ' ||
                    coalesce(display_name_fr, '') || ' ' ||
                    coalesce(entreprise.nom_compagnie, '') || ' ' ||
                    coalesce(entreprise.seo_alias, '') || ' ' ||
                    coalesce(description, '') || ' ' ||
                    coalesce(categorie, '') || ' ' ||
                    coalesce(entreprise.type_entreprise, '') || ' ' ||
                    coalesce(array_to_string(entreprise.secteur_entreprise, ' '), '')
                )
                @@ to_tsquery(dictionary, $1::text)
                OR
                jsonb_to_tsvector(
                    dictionary,
                    coalesce(skills, '[]'::jsonb), '["string"]'
                )
                @@ to_tsquery(dictionary, $1::text)
            ORDER BY rank DESC, date_publication DESC
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
