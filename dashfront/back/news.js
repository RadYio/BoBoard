const express = require('express');
const cors = require('cors');
const axios = require('axios');
const bdd = require('./bdd.js');
const { displayAllDocs, getlastDoc } = require('./bdd.js');

const app = express();
const port = 3080;

const nameOfCollection = "news";

app.use(cors());

let apiKey = "8d510f151fea9c5e7b31f8fba58e4912"; //8d510f151fea9c5e7b31f8fba58e4912
bdd.getlastTimestamp(nameOfCollection);

//displayAllDocs("news");

   app.get('/' + nameOfCollection, (req, res) => {
    bdd.doIhaveToRequest(nameOfCollection).then(result => {
      if(result){
        console.log("We request the API (" + nameOfCollection + ")");
        axios.get("http://api.mediastack.com/v1/news?access_key="+apiKey+"&countries=fr")
          .then(response => {
            res.json(response.data);
            bdd.addDoc(nameOfCollection, response.data);
          })
          .catch(error => {
            console.error('Erreur lors de la récupération des données pour les news !', error);
          });
      } else {
        console.log("We don't request the API (" + nameOfCollection + ")");
        bdd.getlastDoc(nameOfCollection).then(response => {
          res.json(response);
        });
      }
    });
  });

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    }
);
