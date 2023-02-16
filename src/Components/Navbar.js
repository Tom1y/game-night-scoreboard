import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="navbar">
      <Link to="/" className="navbarLogo">
        <h2>KajSeŠPILA</h2>
      </Link>
      <ul className="navbarLinks">
        <Link to="/">Domov</Link>
      </ul>
    </div>
  );
}
