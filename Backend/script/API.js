const express = require("express");
const app = express();
const port = process.env.PORT_BACK;
const connection = require("./DB")
const routes = require("./Routes/index")

app.listen(port, () => {
    console.log("Le serveur est en ligne !");
})

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

app.use(express.json());
app.use("/", routes);