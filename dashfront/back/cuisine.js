const express = require('express');
const cors = require('cors');

const app = express();
const port = 3081;

app.use(cors());
const url = 'https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&tags=under_30_minutes';
const options = {
    method: 'GET',
    headers: {
    'X-RapidAPI-Key': '78d441e7c1mshacf7f6f61fc37a4p101a35jsn10e8d594b66f',
    'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
    }
}
app.fetch('/Cuisine',url,options)
.then(res => res.json())
.then( res => {
    res.results[0]

});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    }
);

