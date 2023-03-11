import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header>
      <img src="" alt="" />
      <nav>
        <ul className="row">
          <Link to="/">
            <li className="Header">Home</li>
          </Link>
          <Link to="/news">
            <li className="Header">News</li>
          </Link>
          <Link to="/aboutus">
            <li className="Header">About Us</li>
          </Link>
          <Link to="/contacts">
            <li className="Header">How to Contact Us</li>
          </Link>
          <Link to="/game">
            <li className="Header">Game</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
