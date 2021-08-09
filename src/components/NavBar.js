import React from "react";

const NavBar = (props) =>{
  const { userName, handleLogout } = props
  return(
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <p className="navbar-brand">Dashboard</p>
           <button className="btn btn-secondary"onClick={handleLogout}>Logout</button>
        </div>
      </nav>
  )
}

export default NavBar