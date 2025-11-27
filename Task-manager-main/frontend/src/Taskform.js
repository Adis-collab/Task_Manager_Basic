import React, { useEffect, useState, useCallback } from "react";
import API from "./api";
import { useNavigate, useParams } from "react-router-dom";

function TaskForm() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [task, setTask] = useState({ title: "", description: "" });

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const loadTask = useCallback(async () => {
    try {
      const res = await API.get(`/tasks/${id}`);
      setTask(res.data);
    } catch (error) {
      console.error("Error loading task:", error);
      navigate("/");
    }
  }, [id, navigate]);

  const submit = async (e) => {
    e.preventDefault();
    try {
      if (id) await API.put(`/tasks/${id}`, task);
      else await API.post("/tasks", task);
      navigate("/");
    } catch (error) {
      console.error("Error saving task:", error);
    }
  };

  useEffect(() => {
    if (id) loadTask();
  }, [id, loadTask]);

  return (
    <div style={{ padding: "20px" }}>
      <h2>{id ? "Edit Task" : "Create Task"}</h2>

      <form onSubmit={submit}>
        <input
          name="title"
          placeholder="Title"
          value={task.title}
          onChange={handleChange}
        />
        <br />
        <textarea
          name="description"
          placeholder="Description"
          value={task.description}
          onChange={handleChange}
          style={{ width: "300px", height: "100px" }}
        />
        <br />

        <button type="submit">{id ? "Update" : "Create"}</button>
      </form>
    </div>
  );
}

export default TaskForm;
