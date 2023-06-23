import React from "react";
import "../styles/checkoutcard.css";
import icon from "../images/bookcover.jfif";

function CheckoutCard({title,image,price}) {
  return (
    <div>
      <div className="checkoutcard-indi-section">
        <div className="checkoutcard-left-section">
          <div className="checkoutcard-img">
            <img src={image} alt="" className="checkoutcard-book-cover" />
          </div>
          <div className="checkoutcard-book-name">{title}</div>
        </div>
        <div className="checkoutcard-right-section">&#8377; {price}</div>
      </div>
    </div>
  );
}

export default CheckoutCard;
