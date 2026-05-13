const express = require("express");
const connection = require("../DB");
const { auth } = require("../Middleware");
const router = express.Router();

function normalizeText(text) {
  return text
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .split(",")[0]
    .replace(/\s*\(.*?\)/g, "")
    .trim()
    .replace(/[!"#$%&'()*+,./:;<=>?@[\]^_`{|}~\\-]+$/, "")
    .replace(/[!"#$%&'()*+,/:;<=>?@[\]^_`{|}~\\]/g, "")
    .replace(" ", "")
    .toLowerCase();
}

router.put("/user/experience/:id", auth, async (req, res) => {
  try {
    let { enterprise_name, title, start, end, description, skills } = req.body;
    const experience_id = req.params.id;

    let enterprise_id;

    // je vérifie si enterprise_name est entré
    // si oui, je regarde s'il correspond à une entreprise déjà enregistrée
    if (enterprise_name) {
      const sqlSelectEntreprise = `
        SELECT
          id_entreprise,
          nom_compagnie
        FROM entreprise
      `;
      const selectEntrepriseRequest =
        await connection.query(sqlSelectEntreprise);

      const enterpriseFind = selectEntrepriseRequest.rows.find(
        (entreprise) =>
          normalizeText(entreprise.nom_compagnie) ===
          normalizeText(enterprise_name),
      );

      if (enterpriseFind) {
        enterprise_name = enterpriseFind.nom_compagnie;
        enterprise_id = enterpriseFind.id_entreprise;
      }
    }

    if (
      !enterprise_name ||
      !title ||
      !start ||
      !end ||
      !description ||
      !skills
    ) {
      const sqlSelectExperienceUtilisateur = `
            SELECT
                id_entreprise,
                nom_entreprise,
                titre,
                date_debut,
                date_fin,
                description,
                compétences
            FROM experience_utilisateur 
            WHERE 
                id_utilisateur = $1
            AND 
                id_experience = $2
            `;
      const selectExperienceUtilisateurRequest = await connection.query(
        sqlSelectExperienceUtilisateur,
        [req.token.id, experience_id],
      );

      if (selectExperienceUtilisateurRequest.rows.length !== 0) {
        if (!enterprise_name) {
          enterprise_id =
            selectExperienceUtilisateurRequest.rows[0].id_entreprise;
          enterprise_name =
            selectExperienceUtilisateurRequest.rows[0].nom_entreprise;
        }

        title = title || selectExperienceUtilisateurRequest.rows[0].titre;
        start = start || selectExperienceUtilisateurRequest.rows[0].date_debut;
        end = end || selectExperienceUtilisateurRequest.rows[0].date_fin;
        description =
          description || selectExperienceUtilisateurRequest.rows[0].description;
        skills =
          skills || selectExperienceUtilisateurRequest.rows[0].compétences;
      }
    }

    const sqlUpdateExperienceUtilisateur = `
            UPDATE
                experience_utilisateur
            SET
                id_entreprise = $1,
                nom_entreprise = $2,
                titre = $3,
                date_debut = $4,
                date_fin = $5,
                description = $6,
                compétences = $7
            WHERE 
                id_utilisateur = $8
            AND 
                id_experience = $9
        `;
    await connection.query(sqlUpdateExperienceUtilisateur, [
      enterprise_id ?? null,
      enterprise_name,
      title,
      start,
      end,
      description,
      skills,
      req.token.id,
      experience_id,
    ]);

    console.log("Modified user experience");
    return res.status(200).json({ msg: "Modified user experience" });
  } catch (err) {
    console.error("Internal server error:", err);
    return res.status(500).json({ msg: "Internal server error" });
  }
});

module.exports = router;
