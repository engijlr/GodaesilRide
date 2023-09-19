import React from "react";
import cashIcon from "../assets/cil_cash.png";
import "./styles/SmallCard.css";

function SmallCard(props) {
  return (
    <div className="small-card" style={{ backgroundColor: props.color1 }}>
      <div className="small-img" style={{ backgroundColor: props.color2 }}>
        <img src={props.icon} />
      </div>
      <h4>{props.title}</h4>
      <p>{props.text}</p>
    </div>
  );
}

export default SmallCard;
