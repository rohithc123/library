import React from "react";
import "../styles/card.css";
import icon from "../images/bookcover.jfif";

const Card = () => {
  return (
    <>
      <div className="card">
        <div className="card-image">
          <div className="card-child card-amount">&#8377; 1567</div>
          <img src={icon} alt="" className="card-child image" />
        </div>
        <div className="card-info">
          <div className="card-book-name">Book name</div>
          <div className="card-author">Book author
          <button>Add to Cart</button></div>
        </div>
      </div>
    </>
  );
};

export default Card;
