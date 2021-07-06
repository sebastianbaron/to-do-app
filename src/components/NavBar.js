import React from "react";

export const NavBar = (props) =>{
  let {userName} = props
  let {signOut} = props
  return(
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand">Welcome to Task View</a>
          <a className="navbar-brand">Logged in as {userName}{signOut}</a>
        </div>
      </nav>
  )
}