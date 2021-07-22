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
     
    const {important, title, description, id} = this.props.task;
  
    return (
      /*{ <div>
        <h1>{title}</h1>
        <p>{important}</p>
        <p>{description}</p>
        <p>{is_completed}</p>
        <p>{id}</p>
        
      </div> } */
      <>
      <div className={important? "col-10 col-sm-8 col-md-6 col-lg-4 col-xl-3 card border-warning m-3": "col-10 col-sm-8 col-md-6 col-lg-4 col-xl-3 card border-light m-3"}>
      <div className="card-header">
        <p>This is an uncompleted task</p>
        <button href="#" className="m-2 btn btn-secondary" onClick={()=> this.setDeleted(id)}>X</button>
      </div>
      <div className="card-body">
        <h4 className="card-title">{title}</h4>
        <p className="card-text">{description}</p>
        {/* <p>{important? "Yes" : "No" }</p> */}
        <button href="#" className="m-2 btn btn-secondary" onClick={()=> this.setCompleted(id)}>Completed</button>    
      </div>
    </div>
    </>
    )
  }
}



