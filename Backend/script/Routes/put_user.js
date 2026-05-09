const express = require("express");
const connection = require("../DB");
const router = express.Router();
const { auth } = require("../Middleware");

router.put("/user", auth, async (req, res) => {
  try {
    let { name, firstname, email } = req.body;

    if (!name || !firstname || !email) {
      const sqlSelectUtilisateur = `
            SELECT
                nom,
                prenom,
                email
            FROM utilisateur 
            WHERE id_utilisateur = $1
            `;
      const selectUtilisateurRequest = await connection.query(
        sqlSelectUtilisateur,
        [req.token.id],
      );

      if (selectUtilisateurRequest.rows.length !== 0) {
        (name = name || selectUtilisateurRequest.rows[0].nom),
          (firstname = firstname || selectUtilisateurRequest.rows[0].prenom),
          (email = email || selectUtilisateurRequest.rows[0].email);
      }
    }

    const sqlUpdateUtilisateur = `
            UPDATE
                utilisateur
            SET
                nom = $1,
                prenom = $2,
                email = $3
            WHERE id_utilisateur = $4
        `;
    const updateUtilisateurRequest = await connection.query(
      sqlUpdateUtilisateur,
      [name, firstname, email, req.token.id],
    );

    console.log("Profile information has been updated");
    return res.status(200).json(updateUtilisateurRequest);
  } catch (err) {
    console.error("Internal server error:", err);
    return res.status(500).json({ msg: "Internal server error" });
  }
});

module.exports = router;
