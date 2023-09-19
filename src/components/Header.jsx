import React from "react";
import Button from "./Button";
import headerImg from "../assets/Group 39407.png";
import "./styles/Header.css";

function Header() {
  return (
    <div className="header-container">
      <div className="text-section">
        <h1>Delivery made Easier, Better and Faster</h1>
        <p>
          We pride ourselves on delivering excellence in every mile. With our
          intuitive app, managing shipments and tracking deliveries.
        </p>
        <div className="btns-container">
          <Button text="Book Demo" />
          <Button text="Join Waitlist" />
        </div>
      </div>
      <div className="image-section">
        <img src={headerImg} />
      </div>
    </div>
  );
}

export default Header;
