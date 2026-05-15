const express = require("express");
const connection = require("../DB");
const router = express.Router();

router.get("/enterpriseTop/:rank", async (req, res) => {
  try {
    const rank = req.params.rank;

    const sqlSelectEntreprise = `
            SELECT 
                id_entreprise,
                type_contrat,
                nom_compagnie,
                seo_alias,
                CASE 
                    WHEN logo IS NOT NULL AND logo NOT LIKE 'https%'
                        THEN 'http://localhost:5000/logo/' || logo

                    ELSE 
                        logo
                    END AS logo,
                type_entreprise,
                secteur_entreprise,
                ville,
                nb_offre,
                nb_visit,
                nb_postulation,
                nb_click,
                score,
                rank,
                COALESCE(
                    (
                        SELECT json_agg(
                            json_build_object(
                                'id_poste', id_poste,
                                'display_name_fr', display_name_fr,
                                'nom_compagnie', entreprise.nom_compagnie,
                                'logo', CASE 
                                    WHEN entreprise.logo IS NOT NULL AND entreprise.logo NOT LIKE 'https%'
                                        THEN 'http://localhost:5000/logo/' || entreprise.logo

                                    ELSE 
                                        entreprise.logo
                                    END,
                                'skills', skills,
                                'description', description,
                                'salaire_currency', salaire_currency,
                                'salaire_annuel_moyen', (salaire_min + salaire_max) / 2 || 'K',
                                'since_posted', CASE
                                    WHEN NOW() - date_publication < INTERVAL '1 day'
                                        THEN TO_CHAR(AGE(NOW(), date_publication), 'HH24"h"MI')

                                    WHEN NOW() - date_publication < INTERVAL '2 day'
                                        THEN TO_CHAR(AGE(NOW(), date_publication), 'DD "jour" HH24"h"MI')

                                    ELSE 
                                        TO_CHAR(AGE(NOW(), date_publication), 'DD "jours" HH24"h"MI')
                                    END,
                                'latitude', latitude,
                                'longitude', longitude
                            )
                        )
                        FROM poste
                        WHERE poste.id_entreprise = entreprise.id_entreprise
                    ), 
                    '[]'::json
                ) AS offre
            FROM entreprise
            WHERE rank <= $1
            ORDER BY rank ASC
        `;
    const selectEntrepriseRequest = await connection.query(
      sqlSelectEntreprise,
      [rank],
    );

    if (selectEntrepriseRequest.rows.length === 0) {
      console.error("No enterprise found");
      return res.status(404).json({ msg: "No enterprise found" });
    }

    console.log("Enterprise found");
    return res.status(200).json(selectEntrepriseRequest.rows);
  } catch (err) {
    console.error("Internal server error:", err);
    return res.status(500).json({ msg: "Internal server error" });
  }
});

module.exports = router;
