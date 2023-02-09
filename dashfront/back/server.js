const express = require('express');
const cors = require('cors');

const app = express();
const port = 3080;

app.use(cors());

app.get('/Person', (req, res) => {
    res.json(
        [
            {
                "name" : "Arthur",
                "size" : "20",
            },
            {
                "name" : "Allan",
                "size" : "10",
            },
            {
                "name" : "Charly",
                "size" : "200",
            },
        ]
    );

});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    }
);
