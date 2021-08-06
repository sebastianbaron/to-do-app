import { React, useRef } from "react";
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/analytics";
import { useCollectionData } from "react-firebase-hooks/firestore";
import ViewTask from "./ViewTask";
import { list } from "../db/firebase";
import NavBar from "./NavBar";


const TaskListView = (props) => {
  const { user, handleLogout } = props;
  const dummy = useRef();
  const formTitle = document.getElementById("formTitle");
  const formDescription = document.getElementById("formDescription");
  const formImportant = document.getElementById("formImportant");
  const query = list
    .where("created_by", "==", user.uid)
    .where("is_active", "==", true)
    .where("is_completed", "==", false);
  const [tasks] = useCollectionData(query, { idField: "id" });

  /* console.log(tasks) */

  const setTask = async (e) => {
    e.preventDefault();

    await list.add({
      title: formTitle.value,
      description: formDescription.value,
      important: formImportant.checked,
      created_at: firebase.firestore.FieldValue.serverTimestamp(),
      is_completed: false,
      is_active: true,
      created_by: user.uid,
    });

    formTitle.value = "";
    formDescription.value = "";
    formImportant.checked = false;
  };

  const scrollIntoView = () => {
    dummy.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
    
    <main>
    <NavBar userName={user.displayName} handleLogout={handleLogout}/>
      <div className="row cardGrid">
        {tasks && tasks.map((task) => <ViewTask key={task.id} task={task} />)}
      </div>
      <div ref={dummy} className="form-anchor-shortcut">
        <button className="btn btn-secondary" onClick={() => scrollIntoView()}>
          New
        </button>
      </div>
      <span ref={dummy}></span>
      <form onSubmit={setTask}>
        <div className="form-group">
          <label htmlFor="formTitle" className="form-label mt-4">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="formTitle"
            aria-describedby="emailHelp"
            placeholder="Enter title"
          ></input>
        </div>

        <div className="form-group">
          <label htmlFor="formDescription" className="form-label mt-4">
            Description
          </label>
          <textarea
            className="form-control"
            id="formDescription"
            rows="3"
            placeholder="Enter task"
          ></textarea>
        </div>
        <div id="div-important">
          <label htmlFor="formImportant" className="form-label">
            Is this an important task?
          </label>
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="formImportant"
          />
        </div>
        <button type="submit" className="btn btn-secondary">
          Create
        </button>
      </form>
    </main>
    </>
  );
};

export default TaskListView;
