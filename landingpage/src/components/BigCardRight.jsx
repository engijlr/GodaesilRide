import React from "react";
import "./styles/BigCardRight.css";
import iphone2 from "../assets/iphone2.png";
import locationRightIcon from "../assets/Vectorlocationright.png";

function BigCardRight() {
  return (
    <div className="bigcardright-container">
      <div className="location-icon-right">
        <img src={locationRightIcon} />
      </div>
      <div>
        <h4>Track Deliveries in Real-time</h4>
        <p>
          Stay in control with our real-time delivery tracking. Know where your
          order is and when it will arrive, ensuring a seamless experience.
        </p>
      </div>
      <div>
        <img src={iphone2} />
      </div>
    </div>
  );
}

export default BigCardRight;
