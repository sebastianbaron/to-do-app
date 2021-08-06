import React from "react";

const NavBar = (props) =>{
  const { userName, handleLogout } = props
  return(
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid mt-3">
          <p className="navbar-brand">Welcome {userName}!</p>
           <p onClick={handleLogout}>Logout</p>
        </div>
      </nav>
  )
}

export default NavBar