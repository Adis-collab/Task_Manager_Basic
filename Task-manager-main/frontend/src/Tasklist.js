import React, { useEffect, useState, useCallback } from "react";
import API from "./api";
import { Link, useNavigate } from "react-router-dom";

function TaskList() {
  const [tasks, setTasks] = useState([]);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const fetchTasks = useCallback(async () => {
    try {
      const res = await API.get("/tasks");
      setTasks(res.data);
    } catch {
      navigate("/login");
    }
  }, [navigate]);

  const deleteTask = async (id) => {
    await API.delete(`/tasks/${id}`);
    fetchTasks();
  };

  useEffect(() => {
    if (token) fetchTasks();
    else navigate("/login");
  }, [token, fetchTasks, navigate]);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Your Tasks</h2>

      <Link to="/create">
        <button>Create Task</button>
      </Link>

      <div style={{ marginTop: "20px" }}>
        {tasks.map((t) => (
          <div
            key={t.id}
            style={{
              border: "1px solid gray",
              padding: "10px",
              marginBottom: "10px",
            }}
          >
            <h3>{t.title}</h3>
            <p>{t.description}</p>

            <Link to={`/edit/${t.id}`}>
              <button>Edit</button>
            </Link>

            <button style={{ marginLeft: "10px" }} onClick={() => deleteTask(t.id)}>
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TaskList;
