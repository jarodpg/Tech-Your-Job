const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
const connection = require('../DB')
const bcrypt = require('bcrypt');
require('dotenv').config();



// permet de configurer la fonction qui va envoyé le mail
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
});

// route pour récup l'émail depuis le front
// Vérifie si un utilisateur existe avec cet email.
// Si aucun utilisateur n'est trouvé, on renvoie quand même
// une réponse positive pour des raisons de sécurité pour que le potentiel hacker ne sache pas
// afin de ne pas révéler quels emails existent dans la base.


router.post('/forgot-password', async (req, res) => {
  const { email } = req.body;

    try {
    // cherche le user par email dans la db
    const result = await connection.query( 'SELECT id_utilisateur , mdp FROM utilisateur WHERE email = $1', [email]
    );

    //
    if (result.rows.length === 0) { //verif si lemail existe
    return res.status(200).json({ message: 'Si cet email existe, un lien a été envoyé.' }); //result.row contient l'utilisateur trouvé
    };

    const user = result.rows[0];  // stop la route 

      const secret = process.env.SECRET_KEY + user.mdp; // construire la key privé pour les tokens ensuite, genre token personalisé de notre compte jwt
    const token = jwt.sign( //créé le token sécurisé 
      { id: user.id_utilisateur }, secret, { expiresIn: '1h' }
    );


    const resetUrl = `${process.env.FRONTEND_URL}/reset-password?token=${token}&id=${user.id_utilisateur}`; //URL Dynamique

    // envoie du mail
    await transporter.sendMail({
      from: `"Tech Your Job" <${process.env.MAIL_USER}>`,
      to: email,
      subject: 'Réinitialisation de ton mot de passe',
      html: `
        <p>Clique sur ce lien pour réinitialiser ton mot de passe.</p>
        <p>Ce lien expire dans <strong>1 heure</strong>.</p>
        <a href="${resetUrl}">${resetUrl}</a>
        <p>Si tu n'es pas à l'origine de cette demande, ignore cet email.</p>
      `,
    });

      res.status(200).json({ message: 'Si cet email existe, un lien a été envoyé.' });

  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Erreur serveur.' });
  }
});





//

router.post('/reset-password', async (req, res) => {
  const { token, id, password } = req.body;

  try {
    // recup user id pour avoir le hach du mdp
    const result = await connection.query(
      'SELECT id_utilisateur, mdp FROM utilisateur WHERE id_utilisateur = $1',
      [id]
    );

    if (result.rows.length === 0) {
      return res.status(400).json({ error: 'Utilisateur introuvable.' });
    }

    const user = result.rows[0]; //stocker le 1er user 

    
    const secret = process.env.SECRET_KEY + user.mdp;

    // verif du token 
    try {
      jwt.verify(token, secret); // verifie si tkn est valide ,pas expiré, et pas modifié
    } catch (err) {
      return res.status(400).json({ error: 'Lien invalide ou expiré.' });
    }

    // hashage du nv password
    const hashedPassword = await bcrypt.hash(password, 12);

    // ca va invalidé le token donc réussite du changement
    await connection.query(
      'UPDATE utilisateur SET mdp = $1 WHERE id_utilisateur = $2',
      [hashedPassword, id]
    );

    res.status(200).json({ message: 'Mot de passe mis à jour avec succès.' });

  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Erreur serveur.' });
  }
});

module.exports = router;