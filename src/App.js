import React, { useState, useEffect } from "react";
import "./App.css";
import TaskListView from "./components/TaskListView";
import "bootswatch/dist/vapor/bootstrap.min.css";
import { fire } from "./db/firebase"
import Login from "./components/Login"
import LoadingScreen from "./components/LoadingScreen"


const App = () => {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [hasAccount, setHasAccount] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const clearInputs = () => {
    setEmail("");
    setPassword("");
  };

  const clearErrors = () => {
    setEmailError("");
    setPasswordError("");
  };

  const handleLogin = () => {
    clearErrors();
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailError(err.message);
            break;
          case "auth/wrong-password":
            setPasswordError(err.message);
            break;
        }       
      }
      );
  };

  const handleLogout = () => {
    fire.auth().signOut();
  };

  const authListener = () => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        clearInputs();
        setUser(user); 
        setIsLoaded(true)
      } else {
        setUser(null);
        setIsLoaded(true)
      }
    });
  };

  useEffect(() => {
    authListener()
  },[])

  return (
    <div className="App">

      {isLoaded === false? (<LoadingScreen />) : 
      user !== null? 
      (<TaskListView 
        user={user} 
        handleLogout={handleLogout} 
      /> )
      : 
      (<Login
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        handleLogin={handleLogin}
        /* handleSignup={handleSignup} */
        hasAccount={hasAccount}
        setHasAccount={setHasAccount}
        emailError={emailError}
        passwordError={passwordError} />)}
    </div>

  );
};

export default App;
