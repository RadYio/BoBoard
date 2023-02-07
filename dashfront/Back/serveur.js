const express = require('express');

const cors = require('cors');

const app = express(),
      port = 3080;

app.use(cors());

app.get("/Livres",(req,res)=>{
    res.json(
        [{
            "name" : "Harry potfleur",
            "price" : "69"},
        {
            "name" : "Vol demaurre",
            "price" : "1"
        }]
    );
});

app.listen(port, () => {
    console.log(('Serveur is running on port 3080'))
})