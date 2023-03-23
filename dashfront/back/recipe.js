// export the function as a module
module.exports = function(nameOfCollection) {
    const express = require('express');
    const axios = require('axios');
    const bdd = require('./bdd.js');

    let nbCall = 0; // to count the number of calls to the API

    const router = express.Router();

    router.get('/', async (req, res) => {
        const url = 'https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&tags=under_30_minutes';
        const options = {
            timeout: 30000,
            method: 'GET',
            headers: {
            'X-RapidAPI-Key': 'e49c7f48c1msh1a861905df30f59p1acec0jsn270c39c1c371',
            'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
            }
        }
        

        bdd.doIhaveToRequest(nameOfCollection).then(result => {
            if(result){
                console.log("[" + nameOfCollection + "] Appel n°" + nbCall++ + " -- We request the API");
                axios.get(url, options).then(response => {
                    res.json(response.data);
                    bdd.addDoc(nameOfCollection, response.data);
                })
                .catch(error => {
                console.error('Erreur lors de la récupération des données des recettes', error);
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