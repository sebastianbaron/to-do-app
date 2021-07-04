import React from "react";

export default class ViewTask extends React.Component{
  constructor(props){
    super(props)
    console.log("ViewTask --> Loaded")
  }

  setActive(id){
    return{
      
    }
  }

 render() {

    const {important, title, description, is_completed} = this.props.task;
  
    return (
      <div>
        <h1>{title}</h1>
        <p>{important}</p>
        <p>{description}</p>
        {/* <p>{created_at}</p> */}
        <p>{is_completed}</p>
  
      </div>
    )
  }
}