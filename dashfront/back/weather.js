// export the function as a module
module.exports = function(nameOfCollection) {
    const express = require('express');
    const axios = require('axios');
    const bdd = require('./bdd.js');

    let nbCall = 0; // to count the number of calls to the API

    const router = express.Router();

    router.get('/', (req, res) => {
        const queryUrl = "https://api.openweathermap.org/data/2.5/onecall?";
        const lat = "lat=48.007751&";
        const lon = "lon=0.198520&";
        const apiOptions = "units=metric&exclude=minutely,alerts&";
        //const apiKey = "appid=42d2a481603b88ccb5d7f1f0297b465c&";
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

    // return the express app with the route
    return router;
};