# Route Register

## Description de la features :
La route register permet d'ajouter un nouvel utilisateur dans la base de données de postgres.

## Technique
### Dependances :
- **brypt** pour hasher le mot de passe

### Fichier cles :
- **DB.js** pour importer les paramètres de connexion à la base de données

### Flux de donnees
- nom
- prénom
- mot de passe hashé
- adresse mail

### 🧠 Logique de fonctionnement
- un body est envoyé par l'utilisateur :
{
    "name": ...,
    "firstname": ...,
    "email": ...,
    "password": ...
}

- une requête check si l'email est déjà enregistrée et si oui l'utilisateur ne peut pas être ajouté
- sinon les infos de l'utilisateur sont ajoutées et son mot de passe et hashé

### 🔐 Sécurité
- mot de passe hashé
- check si l'email est déjà enregistrée
- try/catch pour la gestion d'erreur

## 🚀 Déploiement / Configuration
- import de la route dans le fichier "index.js" puis import de "index.js" dans "API.js"
- l'API est déployée dans le conteneur "backend" de docker