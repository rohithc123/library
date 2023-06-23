import React from "react";
import "../styles/card.css";
import icon from "../images/bookcover.jfif";

function Card({title,author,price}) {
  return (
    <div>
      <div className="card">
        <div className="card-image">
          <div className="card-child card-amount">&#8377; {price}</div>
          <img src={icon} alt="" className="card-child image" />
        </div>
        <div className="card-info">
          <div className="card-book-name">{title}</div>
          <div className="card-author">
            {author}
            <button className="card-add-cart">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
