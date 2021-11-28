import React from "react";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
      <ul className="navbar-nav">
        <li className="navbar-item active">
          <a className="nav-link" href="#">
            Form
          </a>
        </li>
        <li className="navbar-item active">
          <a className="nav-link" href="#">
            Counter 1
          </a>
        </li>
        <li className="navbar-item active">
          <a className="nav-link" href="#">
            Timer
          </a>
        </li>
        <li className="navbar-item active">
          <a className="nav-link" href="#">
            Fetch Data
          </a>
        </li>
        <li className="navbar-item active">
          <a className="nav-link" href="#">
            Counter 2
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
