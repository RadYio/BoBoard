const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');

//Get the service account key from the json file downloaded from firebase
const serviceAccount = require('./clefGoogle.json');

//Initialize the app with a service account, granting admin privileges
initializeApp({
  credential: cert(serviceAccount)
});

// As an admin, the app has access to read and write all data, regardless of Security Rules
const db = getFirestore();


//Export the functions to be used in other files
module.exports = {
  
  //collection: name of the collection in firestore where the doc will be added
  //content: content of the doc
  addDoc: async function (collection, content) {
    const ts = FieldValue.serverTimestamp();
    const docRef = await db.collection(collection).add({
      json: content,
      timestamp: ts
    });
    console.log("[" + ts + "] Document added with ID: " + docRef.id);
  },

  //collection: name of the collection in firestore
  afficherDoc: function (collection) {
    const allDocsInCollection = db.collection(collection).get();
    allDocsInCollection.forEach((doc) => {
      console.log(doc.id, '=>', doc.data());
    });
  }
};