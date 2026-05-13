const crypto = require("crypto");
const fs = require("fs");

// on genere ici un hash en sha256 pour s'assurer que le fichier a pas etait touche pou modifier ou autre
const genererHash = (cheminFichier) => {
  const fichier = fs.readFileSync(cheminFichier);
  return crypto.createHash("sha256").update(fichier).digest("hex");
};

app.post("/candidature/upload", upload.single("fichier"), async (req, res) => {
  const { offre_id } = req.body;
  const user_id = req.user.id; // on chope l'id depuis le cookie/ token de co

  // on genere le fichier hasher
  const hash = genererHash(req.file.path);

  // on met le chemin pour minio (voir doc)
  const path = `offre_${offre_id}/user_${user_id}/${req.file.originalname}`;

  // on push vers minio le fichier
  await minioClient.fPutObject("candidatures", path, req.file.path);

  // on stocke dans postgress dans la table le liens
  await db.query(
    "INSERT INTO candidature (id_utilisateur, id_poste, fichier_path, hash_sha256) VALUES ($1, $2, $3, $4)",
    [user_id, offre_id, path, hash],
  );

  res.json({ success: true });
});
