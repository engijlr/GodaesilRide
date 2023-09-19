import logo from "../assets/logo.png";
import burgerIcon from "../assets/burger.svg";
import "./styles/Navbar.css";
import Button from "./Button";
import { FaX } from "react-icons/fa6";

import { useState } from "react";

function Navbar() {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <nav className="navbar-container">
      <div className="logo-container">
        <img src={logo} />
      </div>
      <div className="burger-icon-nav" onClick={handleShowNavbar}>
        {(!showNavbar && <img src={burgerIcon} />) || <FaX />}
      </div>
      <div className={`navbar-links ${showNavbar && "active-navlinks"}`}>
        <ul>
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">Features</a>
          </li>
          <li>
            <a href="#">Privacy</a>
          </li>
          <li>
            <Button text="Join Waitlist" />
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
