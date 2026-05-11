const express = require("express");
const connection = require("../DB");
const { auth } = require("../Middleware");
const router = express.Router();

router.put("/user/experience/:id", auth, async (req, res) => {
  try {
    let { enterprise_name, title, start, end, description, skills } = req.body;
    const experience_id = req.params.id;

    if (
      !enterprise_name ||
      !title ||
      !start ||
      !end ||
      !description ||
      !skills
    ) {
      const sqlSelectProfilUtilisateur = `
            SELECT
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
      const selectProfilUtilisateurRequest = await connection.query(
        sqlSelectProfilUtilisateur,
        [req.token.id, experience_id],
      );

      if (selectProfilUtilisateurRequest.rows.length !== 0) {
        enterprise_name =
          enterprise_name ||
          selectProfilUtilisateurRequest.rows[0].nom_entreprise;
        title = title || selectProfilUtilisateurRequest.rows[0].titre;
        start = start || selectProfilUtilisateurRequest.rows[0].date_debut;
        end = end || selectProfilUtilisateurRequest.rows[0].date_fin;
        description =
          description || selectProfilUtilisateurRequest.rows[0].description;
        skills = skills || selectProfilUtilisateurRequest.rows[0].compétences;
      }
    }

    const sqlUpdateUtilisateur = `
            UPDATE
                experience_utilisateur
            SET
                nom_entreprise = $1,
                titre = $2,
                date_debut = $3,
                date_fin = $4,
                description = $5,
                compétences = $6
            WHERE 
                id_utilisateur = $7
            AND 
                id_experience = $8
        `;
    await connection.query(sqlUpdateUtilisateur, [
      enterprise_name,
      title,
      start,
      end,
      description,
      skills,
      req.token.id,
      experience_id,
    ]);

    console.log("Experience user information has been modified");
    return res
      .status(200)
      .json({ msg: "Experience user information has been modified" });
  } catch (err) {
    console.error("Internal server error:", err);
    return res.status(500).json({ msg: "Internal server error" });
  }
});

module.exports = router;
