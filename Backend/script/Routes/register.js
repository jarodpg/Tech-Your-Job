const express = require("express");
const connection = require("../DB");
const bcrypt = require("bcrypt");
const router = express.Router();

router.post("/register", async (req,res) => {
    try {
        const sqlCheck = "SELECT * FROM utilisateur WHERE email = $1;";
        const checkRequest = await connection.query(sqlCheck, [req.body.email]);

        if (checkRequest.rows.length > 0) {
            console.log("Error : user already exists");
            return res.status(409).json({msg: "Account already exists"});
        }

        const sqlInsert = "INSERT INTO utilisateur (nom, prenom, email, mdp) VALUES ($1, $2, $3, $4)";
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const values = [
            req.body.name,
            req.body.firstname,
            req.body.email,
            hashedPassword
        ];
        
        await connection.query(sqlInsert, values);

        console.log("New registered user");
        return res.status(200).json({msg: "New registered user"});

    } catch (err) {
        console.error("Internal server error:", err);
        return res.status(500).json({msg: "Internal server error"});
    }
});

module.exports = router;