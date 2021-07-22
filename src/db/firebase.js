import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import 'firebase/analytics';

const firebaseConfig = {
    apiKey: "AIzaSyAxRA-gU-OuPgF8Y9_1oKfJ3b904aNOHy8",
    authDomain: "todoapp-public.firebaseapp.com",
    projectId: "todoapp-public",
    storageBucket: "todoapp-public.appspot.com",
    messagingSenderId: "937363009797",
    appId: "1:937363009797:web:f6c991c94a8a10f145876c"
  }


firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();

//initiating references to the databases
const list = db.collection('tasks')

//for privileges purposes


//google provider sign-in
const googleProvider = new firebase.auth.GoogleAuthProvider();


export { db, auth, googleProvider, list }