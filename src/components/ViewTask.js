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
     
    const {important, description, id} = this.props.task;
  
    return (
      <>
      <div className={important? "col-11 col-xl-8 card class-transition class-transform border-warning m-3": "col-11 col-xl-8 card class-transition class-transform border-light m-3"}>
      <div className="card-body">
        <p className="card-text">{description}</p>
        <button href="#" className="m-2 btn btn-secondary" onClick={()=> this.setDeleted(id)}>X</button>
        <button href="#" className="m-2 btn btn-secondary" onClick={()=> this.setCompleted(id)}>Completed</button>    
      </div>
    </div>
    </>
    )
  }
}



