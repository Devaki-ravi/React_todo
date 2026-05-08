import { useEffect, useState } from "react";

import {
  FaTrash,
  FaCheck,
} from "react-icons/fa";

import "./App.css";


function App() {

  const [title, setTitle] = useState("");

  const [category, setCategory] = useState("Personal");

  const [priority, setPriority] = useState("Medium");

  const [tasks, setTasks] = useState([]);

  const [search, setSearch] = useState("");


  async function fetchTodos() {

    const response = await fetch(
      "http://127.0.0.1:8000/todos"
    );

    const data = await response.json();

    setTasks(data);
  }


  async function addTask() {

    if (!title.trim()) return;

    await fetch(
      "http://127.0.0.1:8000/todos",
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          title,
          category,
          priority,
        }),
      }
    );

    setTitle("");

    fetchTodos();
  }


  async function deleteTask(id) {

    await fetch(
      `http://127.0.0.1:8000/todos/${id}`,
      {
        method: "DELETE",
      }
    );

    fetchTodos();
  }


  async function toggleTask(id) {

    await fetch(
      `http://127.0.0.1:8000/todos/${id}`,
      {
        method: "PUT",
      }
    );

    fetchTodos();
  }


  useEffect(() => {
    fetchTodos();
  }, []);


  const filteredTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(
      search.toLowerCase()
    )
  );


  return (
    <div className="app">

      <div className="todo-container">

        <h1> Todo App</h1>


        <div className="stats">

          <div className="card">
            <h3>Total</h3>
            <p>{tasks.length}</p>
          </div>


          <div className="card">
            <h3>Completed</h3>
            <p>
              {
                tasks.filter(
                  (task) => task.completed
                ).length
              }
            </p>
          </div>


          <div className="card">
            <h3>Pending</h3>
            <p>
              {
                tasks.filter(
                  (task) => !task.completed
                ).length
              }
            </p>
          </div>
        </div>


        <div className="form-section">

          <input
            type="text"
            placeholder="Enter task"
            value={title}
            onChange={(e) =>
              setTitle(e.target.value)
            }
          />


          <select
            value={category}
            onChange={(e) =>
              setCategory(e.target.value)
            }
          >
            <option>Personal</option>
            <option>Study</option>
            <option>Work</option>
            <option>Health</option>
          </select>


          <select
            value={priority}
            onChange={(e) =>
              setPriority(e.target.value)
            }
          >
            <option>High</option>
            <option>Medium</option>
            <option>Low</option>
          </select>


          <button onClick={addTask}>
            Add Task
          </button>
        </div>


        <input
          type="text"
          placeholder="Search task"
          className="search"
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
        />


        <div className="task-list">

          {
            filteredTasks.map((task) => (

              <div
                key={task.id}
                className={`task-card ${task.priority.toLowerCase()}`}
              >

                <div>

                  <h3
                    className={
                      task.completed
                        ? "completed"
                        : ""
                    }
                  >
                    {task.title}
                  </h3>


                  <p>
                    {task.category}
                  </p>


                  <span>
                    {task.priority}
                  </span>
                </div>


                <div className="actions">

                  <button
                    className="complete-btn"
                    onClick={() =>
                      toggleTask(task.id)
                    }
                  >
                    <FaCheck />
                  </button>


                  <button
                    className="delete-btn"
                    onClick={() =>
                      deleteTask(task.id)
                    }
                  >
                    <FaTrash />
                  </button>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
}


export default App;