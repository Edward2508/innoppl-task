import React, { useState } from "react";
import Sidebar from "../dashboard/sidebar/Sidebar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ViewTask.css";
import { useDispatch, useSelector } from "react-redux";
import {
  addtodolist,
  removeList,
  updateTask,
} from "../../../utils/store/todoListSlice";

const ViewTask = () => {
  const tasks = useSelector((state) => state.todo.todolist);
  const [taskInput, setTaskInput] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (editIndex !== null) {
      dispatch(updateTask({ index: editIndex, newTask: taskInput }));
      setEditIndex(null);
    } else {
      dispatch(addtodolist(taskInput));
    }
    setTaskInput("");
  };

  const handleEditTask = (index) => {
    setTaskInput(tasks[index]);
    setEditIndex(index);
  };

  const handleDeleteTask = (index) => {
    dispatch(removeList(index));
  };

  return (
    <div className="d-flex">
      <Sidebar />
      <div className="container-fluid todo-container d-flex justify-content-center align-items-center">
        <div className="todo-box d-flex flex-column pb-5">
          <div className="d-flex justify-content-center">
            <input
              className="form-control w-75 enter-task mt-5"
              type="text"
              placeholder="Enter your Task"
              aria-label="Task input"
              value={taskInput}
              onChange={(e) => setTaskInput(e.target.value)}
            />
          </div>
          <div className="d-flex justify-content-center">
            <button
              type="button"
              className="btn btn-primary mt-3 w-25"
              disabled={!taskInput}
              onClick={handleAddTask}
            >
              {editIndex !== null ? "Update" : "Add"}
            </button>
          </div>
          <div className="mt-3 task-list">
            <ul className="list-group">
              {tasks.map((task, index) => (
                <li
                  key={index}
                  className="d-flex justify-content-between align-items-center ps-5 pe-5"
                >
                  {`${index + 1}. ${task}`}
                  <div>
                    <button
                      className="btn btn-warning me-2 m-3"
                      onClick={() => handleEditTask(index)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-danger m-3"
                      onClick={() => handleDeleteTask(index)}
                    >
                      Delete
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewTask;
