import {React, useRef} from "react";
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import 'firebase/analytics';
import { useCollectionData } from "react-firebase-hooks/firestore";
import ViewTask from "./ViewTask";


firebase.initializeApp({
    apiKey: "AIzaSyBhquWo0QArDg6mXjKVFFA5VNY0BwOEUfg",
    authDomain: "todoapp-dcd44.firebaseapp.com",
    databaseURL: "https://todoapp-dcd44-default-rtdb.firebaseio.com",
    projectId: "todoapp-dcd44",
    storageBucket: "todoapp-dcd44.appspot.com",
    messagingSenderId: "750673670319",
    appId: "1:750673670319:web:e14f516ae66ee130ffa45a"
  })
  
const firestore = firebase.firestore();

function TaskListView(){
    const dummy = useRef();
    const formTitle = document.getElementById("formTitle");
    const formDescription = document.getElementById("formDescription");
    const formImportant = document.getElementById("formImportant");
    const list = firestore.collection("tasks");
    const query = list.orderBy("created_at").limit(25);
    const [tasks] = useCollectionData(query, {idField:"id"});
   
    /* console.log(tasks) */
    
    const setTask = async(e)=>{
      e.preventDefault();
      
      await list.add({ 
        title: formTitle.value,
        description: formDescription.value,
        important: formImportant.checked,
        created_at: firebase.firestore.FieldValue.serverTimestamp(),
      })
  
      dummy.current.scrollIntoView({ behavior: "smooth"});
  
      formTitle.value = ""
      formDescription.value = ""
      formImportant.checked = false
  }
  return(
<main>
    {tasks && tasks.map(task => <ViewTask key={task.id} task={task} />)}
    <div className="form-anchor-shortcut">
        <button>blabla</button>
    </div>
    <span ref={dummy}></span>
    <form onSubmit={setTask} className="col-8 m-auto">
    <div className="form-group">
        <label htmlFor="formTitle" className="form-label mt-4">Title</label>
        <input type="text" className="form-control" id="formTitle" aria-describedby="emailHelp" placeholder="Enter title"></input>
    </div>

    <div className="form-group">
        <label htmlFor="formDescription" className="form-label mt-4">Description</label>
        <textarea className="form-control" id="formDescription" rows="3" placeholder="Enter task"></textarea>
    </div>
    <div>
        <label htmlFor="formImportant" className="form-label mt-4">Important?</label>
        <input className="form-check-input" type="checkbox" value="" id="formImportant" />
    </div>
    <button type="submit" className="btn btn-primary">Submit</button>
    </form>
</main>
    )
  }

export default TaskListView;
