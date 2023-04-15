import React from "react";
import "./css/Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div class="nav-container">
        <Link to={"/Home"}>
          {" "}
          <a class="logo">LOGO</a>
        </Link>
        <ul class="nav-menu">
          <Link to={"/Home"}>
            {" "}
            <li>
              <a>Home</a>
            </li>
          </Link>
          <Link to={"/Apartments"}>
            <li>
              <a>Apartments</a>
            </li>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
