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
  const docRef = await db.collection('news').add({
    val: val
  });
  console.log("Document crée avec l'id: ", docRef.id);
}

async function getAllNews() {
  console.log("Récupération des news...");
  return await db.collection('news').get()[0].data;
}

const app = express();
const port = 3080;

app.use(cors());

let apiKey = ""; //8d510f151fea9c5e7b31f8fba58e4912

app.get('/news', (req, res) => {
  axios.get("http://api.mediastack.com/v1/news?access_key="+apiKey+"&countries=fr")
    .then(response => {
      addDoc(response.data);
      res.json(response.data);
    })

    .catch(error => {
      console.error('Erreur lors de la récupération des données pour les news', error);
      res.json("null");
    });

    console.log("Yooo");
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    }
);
