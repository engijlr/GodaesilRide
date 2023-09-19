import logo from "../assets/logo.png";
import burgerIcon from "../assets/burger.svg";
import "./styles/Navbar.css";
import Button from "./Button";

function Navbar() {
  return (
    <nav className="navbar-container">
      <div className="logo-container">
        <img src={logo} />
      </div>
      <div className="burger-icon-nav">
        <img src={burgerIcon} />
      </div>
      <div className="navbar-links">
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
