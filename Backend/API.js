const express = require("express");
const app = express();
const port = process.env.PORT_BACK;
const { Pool } = require("pg");
const routes = require("./Routes")

app.listen(port, () => {
    console.log("Le serveur est en ligne !");
})

//Paramètres de connexion à la DB
const connection = new Pool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.PORT_DB
});

//Test de connexion à la DB
connection.connect((err, client) => {
    if(err){
        console.error("Erreur de connexion !" + err.stack)
        return;
    }
    console.log("Connexion à la DB réussie !");
    client.release();
    console.log("Test de connexion terminé !");
});

app.use("/", routes);