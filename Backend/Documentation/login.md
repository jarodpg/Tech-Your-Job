# Route Register

## Description de la features :

La route login permet de créer et stocker un token dans le navigateur pour un utilisateur qui se connecte avec les bons identifiants et existe dans la DB.

## Technique

### Dependances :

- **brypt** pour déhasher le mot de passe
- **jsonwebtoken** pour créer un token

### Fichier cles :

- **DB.js** pour importer les paramètres de connexion à la base de données

### Flux de donnees

- adresse mail
- mot de passe
- token (généré à partir de l'id et de l'email)

### 🧠 Logique de fonctionnement

- un body est envoyé par l'utilisateur :
  {
  "email": ...,
  "password": ...
  }

- une requête check si l'email est déjà enregistrée et si oui alors l'utilisateur peut tenter de se connecter avec son mot de passe
- sinon l'erreur suivante apparait : "Invalid credentials"
- ensuite brypt compare le mot de passe entré et le mot de passe de la DB
- si les deux correspondent, un token est créé et stocké dans un cookie pendant 1h
- sinon l'erreur suivante apparait : "Invalid credentials"

### 🔐 Sécurité

- mot de passe hashé
- check si l'email est déjà enregistrée
- comparaison du mot de passe entré avec celui de la DB de manière hashée (bcrypt)
- le token ne contient pas le mot de passe
- token valable 1h
- try/catch pour la gestion d'erreur

## 🚀 Déploiement / Configuration

- import de la route dans le fichier "index.js" puis import de "index.js" dans "API.js"
- l'API est déployée dans le conteneur "backend" de docker
