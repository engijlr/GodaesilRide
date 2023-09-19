import React from "react";
import iphone1 from "../assets/iphone1.png";
import "./styles/BigCardLeft.css";
import locationIcon from "../assets/VectorLocation.png";

function BigCardLeft() {
  return (
    <div className="bigcardleft-container">
      <div>
        <img src={iphone1} />
      </div>
      <div>
        <h4>Track Deliveries in Real-time</h4>
        <p>
          Stay in control with our real-time delivery tracking. Know where your
          order is and when it will arrive, ensuring a seamless experience.
        </p>
      </div>
      <div className="location-icon-left">
        <img src={locationIcon} />
      </div>
    </div>
  );
}

export default BigCardLeft;
