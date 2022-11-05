import { NavLink } from "react-router-dom";
import React from "react";

function Nav() {
  return (
    <div className="navigation">
      <nav className="Nav">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/UseReducer">UseReducer</NavLink>
        <NavLink to="/UseCounter">UseCounter</NavLink>
        <NavLink to="/testError">Test Error</NavLink>
      </nav>
    </div>
  );
}

export default Nav;
