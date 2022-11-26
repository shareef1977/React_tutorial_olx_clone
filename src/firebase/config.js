import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyDBrkQtnBAAt-DdWrLl4d6uRrNdvfkjlE0",
    authDomain: "olx-clone-da967.firebaseapp.com",
    projectId: "olx-clone-da967",
    storageBucket: "olx-clone-da967.appspot.com",
    messagingSenderId: "606177139261",
    appId: "1:606177139261:web:aefb593f2e036cc072e854",
    measurementId: "G-W958X2RSHM"
  };

  export default firebase.initializeApp(firebaseConfig)