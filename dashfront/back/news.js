module.exports = function(nameOfCollection) {

const express = require('express');
const axios = require('axios');
const bdd = require('./bdd.js');
const router = express.Router();

let nbCall = 0; // to count the number of calls to the API
let apiKey = "8d510f151fea9c5e7b31f8fba58e4912"; //8d510f151fea9c5e7b31f8fba58e4912

bdd.getlastTimestamp(nameOfCollection);

//displayAllDocs("news");

   router.get('/', (req, res) => {
    bdd.doIhaveToRequest(nameOfCollection).then(result => {
      if(result){
        console.log("[" + nameOfCollection + "] Appel n°" + nbCall++ + " -- We request the API");
        axios.get("http://api.mediastack.com/v1/news?access_key="+apiKey+"&countries=fr")
          .then(response => {
            res.json(response.data);
            bdd.addDoc(nameOfCollection, response.data);
          })
          .catch(error => {
            console.error('Erreur lors de la récupération des données pour les news !', error);
          });
      } else {
        console.log("[" + nameOfCollection + "] Appel n°" + nbCall++ + " -- We don't request the API");
        bdd.getlastDoc(nameOfCollection).then(response => {
          res.json(response);
        });
      }
    });
  });
  // return the express app with the route
  return router;
};