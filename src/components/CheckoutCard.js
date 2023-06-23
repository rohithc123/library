import React from "react";
import "../styles/checkoutcard.css";
import icon from "../images/bookcover.jfif";
import remove_icon from "../images/remove.png";

function CheckoutCard({ title, image, price }) {
  return (
    <div>
      <div className="checkoutcard-indi-section">
        <div className="checkoutcard-left-section">
          <div className="checkoutcard-img">
            <img src={image} alt="" className="checkoutcard-book-cover" />
          </div>
          <div className="checkoutcard-book-name">{title}</div>
        </div>
        <div className="checkoutcard-right-section">
          <div className="checkoutcard-price">&#8377; {price}</div>
          <div className="checkoutcard-remove">
            <img
              src={remove_icon}
              alt=""
              className="checkoutcard-remove-icon"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckoutCard;
