const express = require("express");
const connection = require("../DB");
const { auth } = require("../Middleware");
const router = express.Router();

router.put("/user/profil", auth, async (req, res) => {
  try {
    let { bio, social, job, xp, language } = req.body;

    if (!bio || !social || !job || !xp || !language) {
      const sqlSelectProfilUtilisateur = `
            SELECT
                biographie,
                plateforme,
                profession_actuelle,
                experiences_annees,
                langues
            FROM profil_utilisateur 
            WHERE id_utilisateur = $1
            `;
      const selectProfilUtilisateurRequest = await connection.query(
        sqlSelectProfilUtilisateur,
        [req.token.id],
      );

      if (selectProfilUtilisateurRequest.rows.length !== 0) {
        bio = bio || selectProfilUtilisateurRequest.rows[0].biographie;
        social = social || selectProfilUtilisateurRequest.rows[0].plateforme;
        job = job || selectProfilUtilisateurRequest.rows[0].profession_actuelle;
        xp = xp || selectProfilUtilisateurRequest.rows[0].experiences_annees;
        language = language || selectProfilUtilisateurRequest.rows[0].langues;
      }
    }

    const sqlUpdateUtilisateur = `
            UPDATE
                profil_utilisateur
            SET
                biographie = $1,
                plateforme = $2,
                profession_actuelle = $3,
                experiences_annees = $4,
                langues = $5
            WHERE id_utilisateur = $6
        `;
    await connection.query(sqlUpdateUtilisateur, [
      bio,
      social,
      job,
      xp,
      language,
      req.token.id,
    ]);

    console.log("Profil user information has been modified");
    return res
      .status(200)
      .json({ msg: "Profil user information has been modified" });
  } catch (err) {
    console.error("Internal server error:", err);
    return res.status(500).json({ msg: "Internal server error" });
  }
});

module.exports = router;
