const express = require('express');
const cors = require('cors');

const { MongoClient } = require('mongodb');

const app = express();
const port = 3080;
let temp = null;
const url = 'https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&tags=under_30_minutes';
const options = {
    timeout: 30000,
    method: 'GET',
    headers: {
    'X-RapidAPI-Key': '78d441e7c1mshacf7f6f61fc37a4p101a35jsn10e8d594b66f',
    'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
    }
}


app.use(cors());

fetch(url,options)
        .then(result => result.json())
        .then( result => {
            temp = result.results[0];
    });
app.get('/Cuisine', (req, res) => {
    res.json(temp);
    
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    }
);

