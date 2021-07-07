import React from "react";

export const NavBar = (props) =>{
  let {userName} = props
  let {signOut} = props
  return(
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid mt-3">
          <p className="navbar-brand">Welcome {userName}!</p>
           <p>{signOut}</p>
        </div>
      </nav>
  )
}