import React from "react";
import "../styles/checkoutcard.css";
import icon from "../images/bookcover.jfif";

function CheckoutCard() {
  return (
    <div>
      <div className="checkoutcard-indi-section">
        <div className="checkoutcard-left-section">
          <div className="checkoutcard-img">
            <img src={icon} alt="" className="checkoutcard-book-cover" />
          </div>
          <div className="checkoutcard-book-name">Name</div>
        </div>
        <div className="checkoutcard-right-section">&#8377; 1567</div>
      </div>
    </div>
  );
}

export default CheckoutCard;
