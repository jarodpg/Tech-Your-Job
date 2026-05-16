// const crypto = require("crypto");
// const fs = require("fs");

// // on genere ici un hash en sha256 pour s'assurer que le fichier a pas etait touche pou modifier ou autre
// const genererHash = (cheminFichier) => {
//   const fichier = fs.readFileSync(cheminFichier);
//   return crypto.createHash("sha256").update(fichier).digest("hex");
// };

// app.post("/candidature/upload", upload.single("fichier"), async (req, res) => {
//   const { offre_id } = req.body;
//   const user_id = req.user.id; // on chope l'id depuis le cookie/ token de co

//   // on genere le fichier hasher
//   const hash = genererHash(req.file.path);

//   // on met le chemin pour minio (voir doc)
//   const path = `offre_${offre_id}/user_${user_id}/${req.file.originalname}`;

//   // on push vers minio le fichier
//   await minioClient.fPutObject("candidatures", path, req.file.path);

//   // on stocke dans postgress dans la table le liens
//   await db.query(
//     "INSERT INTO candidature (id_utilisateur, id_poste, fichier_path, hash_sha256) VALUES ($1, $2, $3, $4)",
//     [user_id, offre_id, path, hash],
//   );

//   res.json({ success: true });
// });

const express = require("express");
const connection = require("../../DB");
const minioClient = require("../../MINIO");
const { auth } = require("../../Middleware");
const upload = require("../../config_multer");
const fs = require("fs");
const router = express.Router();

router.put(
  "/uploadtest",
  auth,
  upload.fields([{ name: "doc", maxCount: 1 }]),
  async (req, res) => {
    try {
      const { offre_id } = req.body;

      if (!req.files?.doc) {
        return res.status(400).json({ msg: "Aucun fichier envoyé" });
      }

      const doc = req.files.doc[0];
      const minioPath = `offre_${offre_id}/user_${req.token.id}/${doc.filename}`;

      // 1. Upload dans MinIO
      await minioClient.fPutObject("candidatures", minioPath, doc.path);

      // 2. Supprime le fichier temporaire
      fs.unlinkSync(doc.path);

      // 3. Update dans candidature
      const sql = `
          UPDATE candidature
          SET fichier_candidats = array_append(
            COALESCE(fichier_candidats, '{}'),
            $1
          )
          WHERE id_utilisateur = $2 AND id_poste = $3
        `;
      await connection.query(sql, [minioPath, req.token.id, offre_id]);

      return res.status(200).json({
        msg: "Fichier uploadé",
        path: minioPath,
      });
    } catch (err) {
      console.error("Erreur upload candidature:", err);
      return res.status(500).json({ msg: "Internal server error" });
    }
  },
);

module.exports = router;
