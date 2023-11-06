import React from "react";
import "./nav.scss";

function Nav() {
  return (
    <nav className="nav">
      <div className="left">
        <a href="#">M.Muzammal</a>
      </div>
      <div className="right">
        <a href="#">Home</a>
        <a href="#about">About</a>
        <a href="#portfolio">Projects</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}

export default Nav;
