import React from "react";
import "./styles/BigCardLeft.css";

function BigCard(props) {
  return (
    <div className="bigcardleft-container">
      <div className="image-container">
        <img src={props.image} />
      </div>
      <div>
        <h4>{props.title}</h4>
        <p>{props.text}</p>
      </div>
      <div className="location-icon-left">
        <img src={props.location} />
      </div>
    </div>
  );
}

export default BigCard;
