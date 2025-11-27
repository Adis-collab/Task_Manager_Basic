import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav style={{ padding: "15px", background: "#222", color: "white" }}>
      <Link to="/" style={{ color: "white", marginRight: "15px" }}>
        Tasks
      </Link>

      {!token ? (
        <>
          <Link to="/login" style={{ color: "white", marginRight: "15px" }}>
            Login
          </Link>
          <Link to="/register" style={{ color: "white" }}>
            Register
          </Link>
        </>
      ) : (
        <button
          onClick={logout}
          style={{
            background: "red",
            border: "none",
            padding: "5px 10px",
            color: "white",
            cursor: "pointer",
          }}
        >
          Logout
        </button>
      )}
    </nav>
  );
}

export default Navbar;
