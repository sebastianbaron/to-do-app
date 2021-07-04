import React from "react";

export default class NavBar extends React.Component{
  constructor(props){
    super(props)
    console.log("NavBar --> Loaded")
  }

render(){
  let userName = this.props.userName;
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand">Welcome to Task View</a>
          <a className="navbar-brand">Logged in as {userName}</a>
        </div>
      </nav>

    )
  }
}