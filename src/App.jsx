import { useState } from "react";
import "./App.css";

function App() {
  const [task, setTask] = useState("");

  const [tasks, setTasks] = useState([]);

  function addTask() {
    if (task.trim() === "") return;

    const newTask = {
      text: task,
      completed: false,
    };

    setTasks([...tasks, newTask]);

    setTask("");
  }

  function deleteTask(indexToDelete) {
    const updatedTasks = tasks.filter(
      (_, index) => index !== indexToDelete
    );

    setTasks(updatedTasks);
  }

  function toggleComplete(indexToToggle) {
    const updatedTasks = tasks.map((item, index) => {
      if (index === indexToToggle) {
        return {
          ...item,
          completed: !item.completed,
        };
      }

      return item;
    });

    setTasks(updatedTasks);
  }

  return (
    <div className="container">
  <h1 className="title">Todo App</h1>

  <div className="input-section">
    <input
      type="text"
      placeholder="Enter task"
      value={task}
      onChange={(e) => setTask(e.target.value)}
      className="input-box"
    />

    <button onClick={addTask} className="add-btn">
      Add
    </button>
  </div>

  <ul className="task-list">
    {tasks.map((item, index) => (
      <li className="task-item" key={index}>
        <span className={item.completed ? "completed" : ""}>
          {item.text}
        </span>

        <div className="button-group">
          <button onClick={() => toggleComplete(index)}>
            {item.completed ? "Undo" : "Complete"}
          </button>

          <button onClick={() => deleteTask(index)}>
            Delete
          </button>
        </div>
      </li>
    ))}
  </ul>
</div>
  );
}

export default App;