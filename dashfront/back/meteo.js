const express = require('express');
const cors = require('cors');

const { MongoClient } = require('mongodb');

const app = express();
const port = 3080;

app.use(cors());

app.get('/meteo', (req, res) => {
    const queryUrl = "https://api.openweathermap.org/data/2.5/onecall?";
    const lat = "lat=48.007751&";
    const lon = "lon=0.198520&";
    const apiOptions = "units=metric&exclude=minutely,alerts&";
    const apiKey = "appid=dbb76c5d98d5dbafcb94441c6a10236e&"; //thanks tonton
    const lang = "lang=fr"; //Choice language
    const requestFull = queryUrl + lat + lon + apiOptions + apiKey + lang;


    const uri = "mongodb+srv://Faiss_master:3gI4AQIowQ6vjtpW@faiss.ethxjgh.mongodb.net/test";
    const client = new MongoClient(uri);

    async function run() {
        try {
          // Connect the client to the server (optional starting in v4.7)
          console.log("Connecting to server...");
          await client.connect();
          // Establish and verify connection
          await client.db("admin").command({ ping: 1 });
          console.log("Connected successfully to server");
        } finally {
          // Ensures that the client will close when you finish/error
          await client.close();
        }
      }
      run().catch(console.dir);

});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    }
);
