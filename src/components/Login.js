import React from "react";
import "../styles/login.css"

const Login = (props) => {

    const {
        email,
        setEmail,
        password,
        setPassword,
        handleLogin,
        handleSignup,
        hasAccount,
        setHasAccount,
        emailError,
        passwordError,
      } = props;
        
    return (
      <main id="loginMain">
        <div id="loginRow" className="row">
          <div className="col-md-6">
            <div id="loginCard">
              <div className="box">
                <h1>Login</h1>
                <p className="text-muted">
                  Please enter your login and password!
                </p>
                <input
                  id="formEmail"
                  type="text"
                  value={email}
                  placeholder="Username"
                  onChange={(e)=> setEmail(e.target.value)}
                />
                <input
                  id="formPassword"
                  type="password"
                  value={password}
                  placeholder="Password"
                  onChange={(e)=> setPassword(e.target.value)}
                />
                <button
                  type="submit"
                  name=""
                  href="#"
                  onClick={handleLogin}
                >Login</button>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }

export default Login