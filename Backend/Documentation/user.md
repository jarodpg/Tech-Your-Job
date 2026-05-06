# Route User

## Description de la features :
La route user permet de récupérer les informations d'un utilisateur via son token.

## Technique
### Fichier cles :
- **Middleware.js** pour importer la fonction **auth()** qui vérifie la validité du token

### Flux de donnees
- token (id et email)
- colonnes de la table "utilisateur" sauf le mot de passe
- colonnes de la table "profil_utilisateur"

### 🧠 Logique de fonctionnement
- Vérification de la validité du token
- S'il y a un token, on récupère l'email pour extraire toutes les infos de l'utilisateur dans la table "utilisateur"
- On utilise l'"id_utilisateur" récupéré précédemment pour sélectionner toutes les infos de l'utilisateur dans la table "profil_utilisateur"
- Si l'utilisateur n'a aucune donnée dans la table "profil_utilisateur" alors on renvoit uniquement ses informations de la table "utilisateur". En effet, quoiqu'il arrive l'utilisateur sera enregistré dans la table "utilisateur" car on utilise son token pour y accéder et le token et généré suite à un login qui crée une ligne pour l'utilisateur dans la DB.
- Sinon on renvoit un JSON avec les infos des deux tables

### 🔐 Sécurité
- données accessibles uniquement via le token
- on vérifie si la requête à la table "profil_utilisateur" ne renvoit pas un contenu nul
- try/catch pour la gestion d'erreur

## 🚀 Déploiement / Configuration
- import de la route dans le fichier "index.js" puis import de "index.js" dans "API.js"
- l'API est déployée dans le conteneur "backend" de docker