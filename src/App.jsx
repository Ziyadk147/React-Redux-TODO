import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { connect, useDispatch, useSelector } from "react-redux";
// import {
//   createTask,
//   deleteTask,
//   toggleCompleted,
//   updateTask,
// } from "./Redux/Task/TaskActions";
import useTaskActions from "./Redux/Task/TaskHook";

const App = () => {

  const [task, setTask] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const {addTask , editTask , toggleTask , destroyTask} = useTaskActions(); //getting functions from custom hook
  const tasks = useSelector((state) => state.task)
  // const dispatch = useDispatch()

  const handleAddOrUpdateTask = () => {
    if (isEditing) {

      editTask(task, editIndex);
      setIsEditing(false);
      setEditIndex(null);
    } else {

      // dispatch(createTask(task));
      addTask(task)
    }
    setTask(""); 
  };

  const handleEditTask = (text, index) => {
    setTask(text);
    setIsEditing(true);
    setEditIndex(index);
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">TODO App</h1>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Add a new task..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button
          className="btn btn-primary"
          onClick={handleAddOrUpdateTask}
          disabled={!task.trim()} 
        >
          {isEditing ? "Update Task" : "Add Task"}
        </button>
      </div>

      <ul className="list-group">
        {tasks.map((t, index) => (
          <li
            key={index}
            className={`list-group-item d-flex justify-content-between align-items-center ${
              t.isCompleted ? "list-group-item-success" : ""
            }`}
          >
            <span
              style={{
                textDecoration: t.isCompleted ? "line-through" : "none",
              }}
            >
              {t.text}
            </span>
            <div>
              <button
                className="btn btn-sm btn-warning me-2"
                onClick={() => handleEditTask(t.text, index)}
              >
                Edit
              </button>
              <button
                className="btn btn-sm btn-success me-2"
                onClick={() => toggleTask(index, !t.isCompleted)}
              >
                {t.isCompleted ? "Undo" : "Complete"}
              </button>
              <button
                className="btn btn-sm btn-danger"
                onClick={() => destroyTask(index)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

// const mapStateToProps = (state) => {
//   return {
//     tasks: state.task,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     addTask: (data) => dispatch(createTask(data)),
//     updateTask: (text, index) => dispatch(updateTask(text, index)),
//     deleteTask: (index) => dispatch(deleteTask(index)),
//     toggleCompleted: (index, isCompleted) =>
//       dispatch(toggleCompleted(index, isCompleted)),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(App);
export default App
