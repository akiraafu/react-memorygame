import React, { useState } from "react";
import "./singleCard.css";

const SingleCard = ({ card }) => {
  return (
    <div className="card">
      <div>
        <img src={card.src} className="front" alt="card front" />
        <img src="/img/cover.png" alt="card back" classname="back" />
      </div>
    </div>
  );
};

export default SingleCard;
