// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyBN7OB3ErBFrpVNo3rVIBQ1eE9HXMuyae0",
    authDomain: "twitter-clone-3315a.firebaseapp.com",
    projectId: "twitter-clone-3315a",
    storageBucket: "twitter-clone-3315a.appspot.com",
    messagingSenderId: "857930244009",
    appId: "1:857930244009:web:75b773a02a930964f76eb8",
    measurementId: "G-G6QGCBJ9ZV"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db= firebaseApp.firestore();
  export default db;
  