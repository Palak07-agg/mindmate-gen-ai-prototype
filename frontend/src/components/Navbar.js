// src/components/Navbar.js
import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">🌌 MindMate</div>
      <ul className="nav-links">
        <li><a href="/dashboard">Dashboard</a></li>
        <li><a href="/mood">Mood Tracker</a></li>

        <li><a href="/journal">Journal</a></li>
        <li><a href="/chatbot">Chatbot</a></li>



      </ul>
    </nav>
  );
}

export default Navbar;
