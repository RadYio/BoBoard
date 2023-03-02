const express = require('express');
const cors = require('cors');

//const { MongoClient } = require('mongodb');

const app = express();
const port = 3080;
const fs = require('fs')



app.use(cors());
/*
fetch(url,options)
        .then(result => result.json())
        .then( result => {
            temp = result.results[0];
            alert(JSON.stringify(temp));
        });
*/
console.log(`Get`);
app.get('/Cuisine', (req, res) => {
    const url = 'https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&tags=under_30_minutes';
    const options = {
        timeout: 30000,
        method: 'GET',
        headers: {
        'X-RapidAPI-Key': '78d441e7c1mshacf7f6f61fc37a4p101a35jsn10e8d594b66f',
        'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
        }
    }
    let temp = null;
    console.log(`Fetch`);
    fetch(url,options)
        .then(result => result.json())
        .then( result => {
            temp =  result.results[0].name;
            console.log("ici"+JSON.stringify(temp));
        });
    
    /*
    let personne = {
        "prenom" : "Marie",
        "age" : 45,
        "passion" : "loisirs créatifs, histoire",
        "taille" : 172
    }
    
    
    let personne = JSON.stringify(personne)
    */
    fs.writeFileSync('recette.json', temp)
    let fichier = fs.readFileSync('recette.json')
    let resultat = JSON.parse(fichier)
    console.log("resultat :"+resultat)
    res.json(temp);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    }
);

