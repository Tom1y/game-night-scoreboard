import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="navbar">
      <h2>KajSeŠPILA</h2>
      <ul className="navbarLinks">
        <Link to="/">Domov</Link>
      </ul>
    </div>
  );
}
