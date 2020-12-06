import React from "react";
import { Link } from "react-router-dom";

export default function ToDoHeader() {
  return (
    <header style={headerStyle}>
      <h1>To Do Application</h1>
      <Link style={linkStyle} to="/">
        Home
      </Link>
      <Link style={linkStyle} to="/about">
        Acount
      </Link>
    </header>
  );
}

const headerStyle = {
  background: "#333",
  color: "#fff",
  textAlign: "center",
  padding: "10px",
};

const linkStyle = {
  color: "#fff",
  textDecoration: "none",
  padding: "10px",
};
