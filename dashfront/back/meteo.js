const express = require('express');
const cors = require('cors');

const { initializeApp } = require("firebase/app");

// Your web app's Firebase configuration
const firebaseConfig = {

    apiKey: "AIzaSyCFkJk1devIgPzv9n3fEPvRJifhJvRtldE",
  
    authDomain: "boboardbdd.firebaseapp.com",
  
    projectId: "boboardbdd",
  
    storageBucket: "boboardbdd.appspot.com",
  
    messagingSenderId: "1069782262793",
  
    appId: "1:1069782262793:web:05972b2697185717e844d8"
  
};

// Initialize Firebase
const appp = initializeApp(firebaseConfig);

  

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

    res.json('null');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    }
);
