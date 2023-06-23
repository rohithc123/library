import React from "react";
import "../styles/checkoutcard.css";
import icon from "../images/bookcover.jfif";
import remove_icon from "../images/remove.png";
import { useStateValue } from "./Stateprovider";

function CheckoutCard({ title, image, price, id }) {
  const [{ card }, dispatch] = useStateValue();

  const removeFromCart = () => {
    dispatch({
      type: "REMOVE-FROM-CART",
      id: id,
    });
  };

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
            <button onClick={removeFromCart}>
              <img
                src={remove_icon}
                alt=""
                className="checkoutcard-remove-icon"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckoutCard;
