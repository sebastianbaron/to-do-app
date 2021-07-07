import React from 'react';
import './App.css';
import {NavBar} from './components/NavBar';
import TaskListView from './components/TaskListView';
import "bootswatch/dist/vapor/bootstrap.min.css";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./db/firebase"

/* const analytics = firebase.analytics(); */

function App() {
  
  const [user] = useAuthState(auth);
  console.log(user)

  return (
    <div className="App">
      <header>
        {user? <NavBar userName={user.email} signOut={<SignOut />} />: ""}
        
      </header>
      <section>
        {user ? <TaskListView user={user} /> : <SignIn/>}
      </section>

    </div>
  );
}


async function signInWithUsernameAndPassword() {
  const email = document.getElementById("formEmail").value;
  const password = document.getElementById("formPassword").value;
  await auth.signInWithEmailAndPassword(email,password);
}

function SignIn() {
  
  return ( 
    <> 
    <div className="">
        <label htmlFor="formEmail">Email</label>
        <input type="email" id="formEmail" />
        <label htmlFor="formPassword">Password</label>
        <input type="password" id="formPassword" />
      </div>
        <button className="sign-in btn btn-outline-secondary" onClick={() => signInWithUsernameAndPassword()}>Sign in</button>
        <p className="mt-3 text-secondary">Please enter email and password.</p>
    </>
    )
  }
    
function SignOut() {
  return auth.currentUser && (
    <button className="btn btn-dark logout-button" onClick={() => auth.signOut()}>Sign Out</button>
    )
}
          
export default App;
          