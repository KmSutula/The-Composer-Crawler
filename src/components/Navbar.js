import React from "react";
import { Link } from "react-router-dom";
import "../index.css";

export default function Navbar() {
  return (
    <>
      <div className="nav">
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/About" className="nav-link">
          About this project
        </Link>
      </div>
    </>
  );
}
