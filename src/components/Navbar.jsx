import logo from "../assets/logo.png";
import burgerIcon from "../assets/burger.svg";
import "./styles/Navbar.css";
import Button from "./Button";
import { FaX } from "react-icons/fa6";
import { Link } from "react-scroll";

import { useState, useEffect } from "react";

function Navbar() {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  useEffect(() => {
    if (typeof window !== "undefined" && window.document) {
      if (showNavbar) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "auto";
      }
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showNavbar]);

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
            <Link to="header">About Us</Link>
          </li>
          <li>
            <Link to="features" smooth={true} spy={true} offset={-200}>
              Features
            </Link>
          </li>
          <li>
            <Link href="#">Privacy</Link>
          </li>
          <li>
            <Link to="contact" smooth={true} spy={true} offset={-200}>
              <Button text="Join Waitlist" />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
