import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  // Fetch todos from backend
  async function fetchTodos() {
    const response = await fetch(
      "http://127.0.0.1:8000/todos"
    );

    const data = await response.json();

    setTasks(data);
  }

  // Add todo
  async function addTask() {
  if (task.trim() === "") return;

  try {
    const response = await fetch(
      `http://127.0.0.1:8000/todos?task=${encodeURIComponent(task)}`,
      {
        method: "POST",
      }
    );

    if (!response.ok) {
      throw new Error("Failed to add task");
    }

    setTask("");

    fetchTodos();

  } catch (error) {
    console.log(error);
  }
}

  // Delete todo
  async function deleteTask(id) {
    await fetch(
      `http://127.0.0.1:8000/todos/${id}`,
      {
        method: "DELETE",
      }
    );

    fetchTodos();
  }

  // Run on page load
  useEffect(() => {
    fetchTodos();
  }, []);

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
        {tasks.map((item) => (
          <li className="task-item" key={item.id}>
            <span>{item.task}</span>

            <div className="button-group">
              <button
                onClick={() => deleteTask(item.id)}
              >
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