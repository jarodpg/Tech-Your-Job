const express = require("express");
const connection = require("../DB");
const bcrypt = require("bcrypt");
const rateLimit = require('express-rate-limit');
const router = express.Router();

// 1 heure pr inscriptuon, personne abesoin de créer plus de 3 comtpe en 1 h en vrai
const registerLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // une heure en millisecondes
  max: 3, // 3 comptes créés max par heure 
  message: { 
    error: "Trop de comptes créés. Par mesure de sécurité, veuillez patienter." 
  },
  standardHeaders: true,
  legacyHeaders: false,
});

// ajout de registerLimiter juste avant le async
router.post("/register", registerLimiter, async (req,res) => {
    try {
        const sqlCheck = "SELECT * FROM utilisateur WHERE email = $1;";
        const checkRequest = await connection.query(sqlCheck, [req.body.email]);

    if (checkRequest.rows.length > 0) {
      console.log("Error : user already exists");
      return res.status(409).json({ msg: "Account already exists" });
    }

    const sqlInsert =
      "INSERT INTO utilisateur (nom, prenom, email, mdp, role) VALUES ($1, $2, $3, $4, $5)";
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const values = [
      req.body.name,
      req.body.firstname,
      req.body.email,
      hashedPassword,
      "user",
    ];

    await connection.query(sqlInsert, values);

    console.log("New registered user");
    return res.status(200).json({ msg: "New registered user" });
  } catch (err) {
    console.error("Internal server error:", err);
    return res.status(500).json({ msg: "Internal server error" });
  }
});

module.exports = router;
