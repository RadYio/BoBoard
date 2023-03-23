// export the function as a module
module.exports = function(nameOfCollection) {
    const express = require('express');
    const cors = require('cors');
    const axios = require('axios');
    const bdd = require('./bdd.js');

    let nbCall = 0; // to count the number of calls to the API

    const router = express.Router();

    router.get('/Cuisine', async (req, res) => {
        const url = 'https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&tags=under_30_minutes&aspect_ratio=9:16';
        const options = {
            timeout: 30000,
            method: 'GET',
            headers: {
            'X-RapidAPI-Key': '78d441e7c1mshacf7f6f61fc37a4p101a35jsn10e8d594b66f',
            'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
            }
        }
        console.log("Appel n°" + nbCall++);
        

        bdd.doIhaveToRequest(nameOfCollection).then(result => {
            if(result){
                console.log("We request the API");
                axios.get(url, options).then(response => {
                    res.json(response.data);
                    bdd.addDoc(nameOfCollection, response.data);
                })
                .catch(error => {
                console.error('Erreur lors de la récupération des données des recettes', error);
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