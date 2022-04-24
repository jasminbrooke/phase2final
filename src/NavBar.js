import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return <div className="navbar">

    <NavLink
      to="/"
      exact
    >
      Intro
    </NavLink>
    <NavLink
      to="/menu"
      exact
    >
      Menu
    </NavLink>
    <NavLink
      to="/shopfront"
      exact
    >
      Shop Front
    </NavLink>
    <NavLink
      to="/store"
      exact
    >
      Store
    </NavLink>
    </div>;
}

export default NavBar;
