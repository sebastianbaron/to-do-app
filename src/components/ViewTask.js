import React from "react";
import { list } from "../db/firebase"

export default class ViewTask extends React.Component{
  constructor(props){
    super(props)
    console.log("ViewTask --> Loaded")
  }

  setCompleted(id){
      list.doc(id).update({
      is_completed: true  
    })
    console.log(`Task with id ${id} set as completed`)
  }

  setDeleted(id){
      list.doc(id).update({
      is_active: false
    })
    console.log(`Task with id ${id} deleted`)
  }

 render() {
     
    const {important, title, description, is_completed, id} = this.props.task;
  
    return (
      <div>
        <h1>{title}</h1>
        <p>{important}</p>
        <p>{description}</p>
        {/* <p>{created_at}</p> */}
        <p>{is_completed}</p>
        <p>{id}</p>
        <a class="m-2" onClick={()=> this.setCompleted(id)}>setCompleted</a>
        <a class="m-2" onClick={()=> this.setDeleted(id)}>setDeleted</a>
      </div>
    )
  }
}



