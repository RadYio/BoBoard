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
        'X-RapidAPI-Key': 'b6dc3bdd08msh2a7c44ee7be54f1p10a5bajsne0816708109e',
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

