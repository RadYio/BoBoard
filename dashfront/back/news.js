const express = require('express');
const cors = require('cors');
const axios = require('axios');
const bdd = require('./bdd.js');

const app = express();
const port = 3080;

app.use(cors());

let apiKey = ""; //8d510f151fea9c5e7b31f8fba58e4912
bdd.getlastTimestamp("news");

app.get('/news', (req, res) => {
  axios.get("http://api.mediastack.com/v1/news?access_key="+apiKey+"&countries=fr")
    .then(response => {
      bdd.addDoc("news", response.data);
      res.json(response.data);
    })

    .catch(error => {
      console.error('Erreur lors de la récupération des données pour les news', error);
      res.json("null");
    });

    console.log("Yooo");
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    }
);
