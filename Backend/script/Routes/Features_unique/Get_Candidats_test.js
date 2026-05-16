const express = require("express");
const fetch = require("make-fetch-happen");
const connection = require("../../DB");
const fs = require("fs");
const router = express.Router();

// route pour get les fichier d'un candidats
router.get("/get_test/:id", async (req, res) => {
  try {
    const id = req.params.id;

    if (!Number.isInteger(Number(id))) {
      console.error("The id parameter must be an Integer");
      return res
        .status(400)
        .json({ msg: "The id parameter must be an Integer" });
    }
    // on prend le fichier
    const sqlTEST = `
        SELECT
            fichier_candidats
        FROM candidature 
        WHERE id_poste = $1
    `;
    const sqlTESTRequest = await connection.query(sqlTEST, [id]);

    if (sqlTESTRequest.rows.length === 0) {
      console.error("0 post found");
      return res.status(404).json({ msg: "0 post found" });
    }

    return res.status(200).json(sqlTESTRequest.rows[0]);
  } catch (err) {
    console.error("Internal server error:", err);
    return res.status(500).json({ msg: "Internal server error" });
  }
});

module.exports = router;
