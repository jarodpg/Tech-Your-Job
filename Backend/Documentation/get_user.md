# Route User

## Description de la features :

La route user permet de récupérer les informations d'un utilisateur via son token.

## Technique

### Fichier cles :

- **DB.js** pour effectuer des requêtes SQL au sein de notre base de données
- **Middleware.js** pour importer la fonction **auth()** qui vérifie la validité du token

### Flux de donnees

- token (id et email)
- colonnes de la table "utilisateur" sauf le mot de passe
- colonnes de la table "profil_utilisateur"
- colonnes de la table "experience_utilisateur"
- colonnes de la table "formation_utilisateur"

### 🧠 Logique de fonctionnement

- Vérification de la validité du token
- S'il y a un token, on récupère l'id pour extraire toutes les infos de l'utilisateur dans les tables "utilisateur", "profil_utilisateur", "experience_utilisateur" et "formation_utilisateur"
- Quoiqu'il arrive l'utilisateur sera enregistré dans la table "utilisateur" car on utilise son token pour y accéder et le token et généré suite à un login qui crée une ligne pour l'utilisateur dans cette table de la DB.

### Format de réponse

```json
{
  "global": [
    {
      "id_utilisateur": 1,
      "nom": "Sosniak",
      "prenom": "Nathan",
      "pays": "France",
      "localisation": "Samoens",
      "latitude_secteur": 46.0834066,
      "longitude_secteur": 6.7269485,
      "role": null,
      "email": "nathan.sosniak@epitech.eu",
      "telephone": "07 87 93 47 91",
      "age": 19
    }
  ],
  "profil": [
    {
      "id_profil": 1,
      "banniere": null,
      "photo_profil": null,
      "biographie": "Je suis Nathan Sosniak",
      "plateforme": null,
      "profession_actuelle": "Etudiant",
      "experiences_annees": null,
      "document": null,
      "langues": null,
      "nb_vues_profil": 0,
      "candidatures_envoyees": 0,
      "candidatures_consultees": 0,
      "candidatures_positives": 0,
      "candidatures_refusees": 0
    }
  ],
  "experience": [
    {
      "id_experience": 1,
      "id_entreprise": null,
      "nom_entreprise": "LSMinfo",
      "titre": null,
      "date_debut": "2020-01-01T00:00:00.000Z",
      "date_fin": null,
      "description": null,
      "compétences": null
    }
  ],
  "formation": [
    {
      "id_formation": 2,
      "id_entreprise": null,
      "nom_établissement": "Epitech",
      "titre": null,
      "date_debut": "2025-08-01T00:00:00.000Z",
      "date_fin": null,
      "description": null,
      "compétences": null,
      "diplome": null
    }
  ]
}
```

### 🔐 Sécurité

- données accessibles uniquement via le token
- si l'utilisateur ne figure pas dans une table, une liste vide est renvoyée en tant que valeur
- try/catch pour la gestion d'erreur

## 🚀 Déploiement / Configuration

- import de la route dans le fichier "index.js" puis import de "index.js" dans "API.js"
- l'API est déployée dans le conteneur "backend" de docker
