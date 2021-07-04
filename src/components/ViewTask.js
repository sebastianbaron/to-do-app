import React from "react";


function ViewTask(props) {

    const {important, title, description, is_completed} = props.task;
  
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

export default ViewTask;