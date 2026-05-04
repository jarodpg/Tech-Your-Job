const express = require("express");
const jwt = require("jsonwebtoken");
const connection = require("../DB");
const bcrypt = require("bcrypt");
const router = express.Router();

router.post("/login", async (req, res) => {
    try {
        // je vérifie si l'utilisateur existe
        const sqlCheck = "SELECT * FROM utilisateur WHERE email = $1;";
        const checkRequest = await connection.query(sqlCheck, [req.body.email]);
        
        if (checkRequest.rows.length === 0) {
            console.log("Error : Invalid credentials");
            return res.status(401).json({msg: "Invalid credentials"});
        }

        // je vérifie si le mot de passe est bon
        const passwordVerification = await bcrypt.compare(req.body.password, checkRequest.rows[0].mdp);

        if (!passwordVerification) {
            console.log("Error : Invalid credentials");
            return res.status(401).json({msg: "Invalid credentials"});
        }

        // je crée le token
        const jsonData = {
            id: checkRequest.rows[0].id_utilisateur,
            email: checkRequest.rows[0].email
        };
        const secretKey = process.env.SECRET_KEY;
        const options = {expiresIn: '1h'}; 
        const token = jwt.sign(jsonData, secretKey, options);

        // je stocke le token dans un cookie 
        res.cookie("token", token, {
            httpOnly: true, // empêche js de lire le cookie
            sameSite: "Strict", // le cookie est envoyé uniquement si la requête provient de notre site
            secure: false, // car en localhost en http et non https
            maxAge: 3600 * 1000 // secondes dans 1h * 1000 car javascript compte en ms = durée de vie du cookie : de 1 heure
        });

        console.log("Login succesful");
        return res.status(200).json({msg: "Login succesful"});

    } catch (err) {
        console.error("Internal server error:", err);
        return res.status(500).json({msg: "Internal server error"});
    }
});

module.exports = router;