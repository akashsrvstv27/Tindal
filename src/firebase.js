// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase"




const firebaseConfig = {
    apiKey: "AIzaSyB5m04THMk9zEBefmGtFmHx9zZ_8rcBE5I",
    authDomain: "tindal-8b57e.firebaseapp.com",
    projectId: "tindal-8b57e",
    storageBucket: "tindal-8b57e.appspot.com",
    messagingSenderId: "378368946147",
    appId: "1:378368946147:web:b796324383d3de48f6bad6",
    measurementId: "G-1YBXGKBB8H"
  };


  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const database = firebaseApp.firestore();


  export default database;