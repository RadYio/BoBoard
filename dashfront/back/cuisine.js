const express = require('express');
const cors = require('cors');
const axios = require('axios');



const app = express();
const port = 3080;




app.use(cors());



console.log(`Get`);
app.get('/Cuisine', async (req, res) => {
    const url = 'https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&tags=under_1_hour&aspect_ratio=9:16';
    const options = {
        timeout: 30000,
        method: 'GET',
        headers: {
        'X-RapidAPI-Key': '78d441e7c1mshacf7f6f61fc37a4p101a35jsn10e8d594b66f',
        'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
        }
    }
    axios.get(url, options)
        .then(result => {
            res.json(result.data);
        });

});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    }
);

