import React from "react";
import { NavLink } from "react-router-dom";
import "../App.css";

const Nav = () => {
  return (
    <div className="header">
      <NavLink to="/">Login</NavLink>
      <NavLink to="/signup">Sign Up</NavLink>
      <h1>Pary Planner</h1>
    </div>
  );
};

export default Nav;