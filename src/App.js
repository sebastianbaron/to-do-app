import React from 'react';
import './App.css';

import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import 'firebase/analytics';

import NavBar from './components/NavBar';
import TaskListView from './components/TaskListView';

import "bootswatch/dist/vapor/bootstrap.min.css";

import { useAuthState } from "react-firebase-hooks/auth";

const auth = firebase.auth();

/* const analytics = firebase.analytics(); */

function App() {
  
  const [user] = useAuthState(auth);
  console.log(user)

  return (
    <div className="App">
      <header>
        {user? <NavBar /> : ""}
        <SignOut />
      </header>
      <section>
        {user ? <TaskListView /> : <SignIn/>}
      </section>

    </div>
  );
}


function SignIn() {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }

    /* let SignInWithEmail = () => auth.signInWithEmailAndPassword(email.value,password.value); */


  
  return (
    <>
    {/* <div className="not-signed-in">
      <form onSubmit={SignIn()}>
      <div>
        <label htmlFor="loginEmail">Email</label>
        <input  id="loginEmail" type="text"/>
        <label htmlFor="loginPassword">Password</label>
        <input  id="loginPassword" type="password"/> */}
        <button className="sign-in btn btn-outline-secondary" onClick={signInWithGoogle} >Sign in</button>
        <p className="mt-3 text-secondary">Please sign in with your google account.</p>
   {/*    </div>
      </form>
    </div> */}
    </>
    )
  }
    
function SignOut() {
  return auth.currentUser && (
    <button className="sign-out " onClick={() => auth.signOut()}>Sign Out</button>
    )
}
          
export default App;
          