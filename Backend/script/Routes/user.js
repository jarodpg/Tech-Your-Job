const express = require("express");
const connection = require("../DB");
const router = express.Router();
const { auth } = require("../Middleware");

router.get("/user", auth, async (req, res) => {
    try {
        // infos de la table utilisateur
        const sqlSelectUtilisateur = `
            SELECT 
                id_utilisateur,
                nom,
                prenom,
                document,
                latitude_secteur,
                longitude_secteur,
                role,
                email,
                telephone,
                age
            FROM utilisateur 
            WHERE email = $1
        `;
        const selectUtilisateurRequest = await connection.query(sqlSelectUtilisateur, [req.token.email]);

        // infos de la table profil_utilisateur
        const sqlSelectProfil_Utilisateur = `
            SELECT 
                id_profil, 
                description, 
                nb_vues_profil, 
                candidatures_envoyees, 
                candidatures_consultees, 
                candidatures_positives, 
                candidatures_refusees, 
                diplomes, 
                experiences_annees, 
                jobs_passes, 
                hard_skills, 
                soft_skills, 
                langues, 
                photo_profil, 
                banniere, 
                titre_profession 
            FROM profil_utilisateur 
            WHERE id_utilisateur = $1
        `;
        const selectProfil_UtilisateurRequest = await connection.query(sqlSelectProfil_Utilisateur, [selectUtilisateurRequest.rows[0].id_utilisateur]);

        // si l'utilisateur n'a pas de ligne dans la table profil_utilisateur
        // je renvoie uniquement ces infos de la table utilisateur
        if (selectProfil_UtilisateurRequest.rows.length === 0) {
            console.log("User data retrieved")
            return res.status(200).json(selectUtilisateurRequest.rows[0])
        }

        // sinon je renvoie tout
        console.log("User data retrieved");
        return res.status(200).json({
            ...selectUtilisateurRequest.rows[0], 
            ...selectProfil_UtilisateurRequest.rows[0]
        });

    } catch (err) {
        console.error("Internal server error:", err);
        return res.status(500).json({msg: "Internal server error"});
    }
});

module.exports = router;