const express = require("express");
const connection = require("../DB");
const router = express.Router();

router.get("/enterprise/:id", async (req, res) => {
  try {
    const id = req.params.id;

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
        rank
      FROM entreprise
      WHERE id_entreprise = $1
    `;
    const selectEntrepriseRequest = await connection.query(
      sqlSelectEntreprise,
      [id],
    );

    const sqlSelectPosteEntreprise = `
      SELECT 
        id_poste,
        display_name_fr,
        entreprise.nom_compagnie,
        CASE 
          WHEN entreprise.logo IS NOT NULL AND entreprise.logo NOT LIKE 'https%'
            THEN 'http://localhost:5000/logo/' || entreprise.logo

          ELSE 
            entreprise.logo
        END AS logo,
        skills,
        description,
        salaire_currency,
        (salaire_min + salaire_max) / 2 || 'K' AS salaire_annuel_moyen,
        CASE
          WHEN NOW() - date_publication < INTERVAL '1 day'
            THEN TO_CHAR(AGE(NOW(), date_publication), 'HH24"h"MI')

          WHEN NOW() - date_publication < INTERVAL '2 day'
            THEN TO_CHAR(AGE(NOW(), date_publication), 'DD "jour" HH24"h"MI')

          ELSE 
            TO_CHAR(AGE(NOW(), date_publication), 'DD "jours" HH24"h"MI')
        END AS since_posted,
        latitude,
        longitude
      FROM poste
      JOIN entreprise ON poste.id_entreprise = entreprise.id_entreprise
      WHERE poste.id_entreprise = $1
    `;
    const selectPosteEntrepriseRequest = await connection.query(
      sqlSelectPosteEntreprise,
      [id],
    );

    if (selectEntrepriseRequest.rows.length === 0) {
      console.error("Enterprise not found");
      return res.status(404).json({ msg: "Enterprise not found" });
    }

    console.log("Enterprise found");
    return res.status(200).json({
      ...selectEntrepriseRequest.rows[0],
      ...{ offre: selectPosteEntrepriseRequest.rows },
    });
  } catch (err) {
    console.error("Internal server error:", err);
    return res.status(500).json({ msg: "Internal server error" });
  }
});

module.exports = router;
