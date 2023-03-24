const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');



let serviceAccount = null;

if("FIREBASE_SERVICE_ACCOUNT" in process.env){
  console.log("Environment variable FIREBASE_SERVICE_ACCOUNT is defined");
  serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT);
}else{
  console.log("Environment variable FIREBASE_SERVICE_ACCOUNT is undefined try to use the local file");
  //Get the service account key from the json file downloaded from firebase
  serviceAccount = require('./clefGoogle.json');
}



const weatherRefresh = 3600000; //1 hour
const recipeRefresh = 86400000; //1 day
const newsRefresh = 86400000; //1 day

//Initialize the app with a service account, granting admin privileges
initializeApp({
  credential: cert(serviceAccount)
});

// As an admin, the app has access to read and write all data, regardless of Security Rules
const db = getFirestore();


//Export the functions to be used in other files
module.exports = {
  //addDoc: add a document to a collection in firestore
  //collection: name of the collection in firestore where the doc will be added
  //content: content of the doc
  addDoc: async function (collection, content) {
    const ts = Date.now();
    const docRef = await db.collection(collection).add({
      json: content,
      timestamp: ts
    });
    console.log("(" + ts + ") Document added with ID: " + docRef.id);
  },
  //displayAllDocs: display all the docs in a collection in firestore
  //collection: name of the collection in firestore
  displayAllDocs: async function (collection) {
    const allDocsInCollection = await db.collection(collection).get();
    allDocsInCollection.forEach((doc) => {
       console.log(doc.id, '=>', doc.data());
    });
  },
  getDoc: async function (collection) {
    const allDocsInCollection = await db.collection(collection).get();
    return allDocsInCollection;
  },
  //getLastTimestamp: display the last timestamp in a collection in firestore
  //collection: name of the collection in firestore
  getlastTimestamp: async function (collection) {
    const allDocsInCollection = await db.collection(collection).orderBy("timestamp", "desc").limit(1).get();
    return allDocsInCollection.docs.map((doc) => {
      return doc.data().timestamp;
    })[0];
  },
  //getLastDoc: display the last doc (json) in a collection in firestore
  //collection: name of the collection in firestore
  getlastDoc: async function (collection) {
    const allDocsInCollection = await db.collection(collection).orderBy("timestamp", "desc").limit(1).get();
    return allDocsInCollection.docs.map((doc) => {
      return doc.data().json;
    })[0];
  },
  //doIhaveToRequest: check if the last doc in a collection in firestore is older than the refresh time
  //collection: name of the collection in firestore
  doIhaveToRequest: async function (collection) {
    const res = await this.getlastTimestamp(collection);
    if(res === undefined) return true;
    const diff = Date.now() - res;
    switch (collection) {
      case "weather":
        return diff > weatherRefresh;
      case "recipe":
        return diff > recipeRefresh;
      case "news":
        return diff > newsRefresh;
      default:
        return true;
    }
  }
};
