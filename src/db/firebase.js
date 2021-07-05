import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import 'firebase/analytics';

const firebaseConfig = {
    apiKey: "AIzaSyBhquWo0QArDg6mXjKVFFA5VNY0BwOEUfg",
    authDomain: "todoapp-dcd44.firebaseapp.com",
    databaseURL: "https://todoapp-dcd44-default-rtdb.firebaseio.com",
    projectId: "todoapp-dcd44",
    storageBucket: "todoapp-dcd44.appspot.com",
    messagingSenderId: "750673670319",
    appId: "1:750673670319:web:e14f516ae66ee130ffa45a"
  }


firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();

//initiating references to the databases
const list = db.collection('tasks')

// for privileges purposes


//google provider sign-in
const googleProvider = new firebase.auth.GoogleAuthProvider();


export { db, auth, googleProvider, list }