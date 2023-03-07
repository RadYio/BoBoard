const express = require('express');
const cors = require('cors');
const axios = require('axios');

const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');



const serviceAccount = require('./clefGoogle.json');
const { response } = require('express');

initializeApp({
  credential: cert(serviceAccount)
});

const db = getFirestore();

async function addDoc(val) {
  const docRef = await db.collection('valeurRandom').add({
    val: val
  });
  console.log("Document crée avec l'id: ", docRef.id);
}

async function afficherDoc() {
  const snapshot = await db.collection('users').get();
  snapshot.forEach((doc) => {
    console.log(doc.id, '=>', doc.data());
  });
}

afficherDoc();

//addDoc("test");

console.log("on est passé");
  

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
    console.log("Appel");

    
  axios.get(requestFull)
    .then(response => {
      console.log(response.data);
      res.json(response.data);
    })
    .catch(error => {
      console.error('Erreur lors de la récupération des données météo', error);
    });

    console.log("Yooo");
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    }
);
