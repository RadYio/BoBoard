const express = require('express');
const cors = require('cors');
const axios = require('axios');

//We import the functions from bdd.js
const bdd = require('./bdd.js');

const nameOfCollection = "weather";
  
let nbCall = 0;
const app = express();
const port = 3080;

app.use(cors());


app.get('/' + nameOfCollection, (req, res) => {
  const queryUrl = "https://api.openweathermap.org/data/2.5/onecall?";
  const lat = "lat=48.007751&";
  const lon = "lon=0.198520&";
  const apiOptions = "units=metric&exclude=minutely,alerts&";
  const apiKey = "appid=dbb76c5d98d5dbafcb94441c6a10236e&"; //thanks tonton
  const lang = "lang=en"; //Choice language
  const requestFull = queryUrl + lat + lon + apiOptions + apiKey + lang;
  console.log("Appel n°" + nbCall++);
  
  
  bdd.doIhaveToRequest(nameOfCollection).then(result => {
    if(result){
      console.log("We request the API");
      axios.get(requestFull)
        .then(response => {
          res.json(response.data);
          bdd.addDoc(nameOfCollection, response.data);
        })
        .catch(error => {
          console.error('Erreur lors de la récupération des données météo', error);
        });
    } else {
      console.log("We don't request the API");
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
