import React from "react";
import CheckoutCard from "./CheckoutCard";
import { useStateValue } from "./Stateprovider";
import { NavLink } from "react-router-dom";
import { getCartTotal } from "./Reducer";

import CurrencyFormat from "react-currency-format";
import icon from "../images/bookcover.jfif";
import "../styles/checkout.css";

function Checkout() {
  const [{ cart }, dispatch] = useStateValue();
  const shippingcost = cart?.length>0?75:0;

  return (
    <div className="checkout">
      <div className="checkout-header">Checkout</div>
      <div className="checkout-section">
        <div className="billing-details">
          <form action="" style={{ width: "100%", height: "100%" }}>
            BILLING DETAILS
            <div className="checkout-name">
              <div className="checkout-input">
                <div>FIRST NAME</div>
                <input type="text" required className="name" />
              </div>
              <div className="checkout-input">
                <div>LAST NAME</div>
                <input
                  type="text"
                  required
                  className="name"
                  // style={{ marginLeft: "0%" }}
                />
              </div>
            </div>
            <div>
              <div className="checkout-input">
                <div>STREET ADDRESS</div>
                <input
                  type="text"
                  placeholder="House number and street name"
                  required
                  className="checkout-input-field"
                />
              </div>
            </div>
            <div className="checkout-input">
              <div>TOWN/CITY</div>
              <div>
                <input type="text" required className="checkout-input-field" />
              </div>
            </div>
            <div className="checkout-input">
              <div>STATE</div>
              <input
                type="text"
                // placeholder="STATE"
                required
                className="checkout-input-field"
              />
            </div>
            <div className="checkout-input">
              <div>PIN CODE</div>
              <input
                type="number"
                // pattern="/^-?\d+\.?\d*$/"
                // onkeyDown="if(this.value.length==4) return false"
                // maxlength="6"
                className="checkout-input-field"
                required
              />
            </div>
            {/* <input type="text" placeholder="STATE" /> */}
            <NavLink to="/payment">
            <input
              type="submit"
              id=""
              value="Place your order"
              className="checkout-submit-btn"
            />
            </NavLink>
          </form>
        </div>
        <div className="order-details">
          <div className="order-header">ORDER DETAILS</div>
          <div className="order-indi-section" style={{ marginTop: "3.8%" }}>
            <div className="order-left-section">PRODUCT</div>
            <div className="order-right-section" style={{ fontWeight: "700" }}>
              SUBTOTAL
            </div>
          </div>
          {cart?.map((item) => (
            <CheckoutCard
              title={item.title}
              price={item.price}
              image={item.cover}
              id={item.id}
            />
          ))}
          <CurrencyFormat
            renderText={(value) => (
              <div>
                <div
                  className="order-indi-section"
                  style={{ backgroundColor: "rgba(161, 161, 161,0.05)" }}
                >
                  <div className="order-left-section">
                    SUBTOTAL
                    <div style={{ fontWeight: "400" }}>
                      ({cart?.length} items):{" "}
                    </div>
                  </div>
                  <div className="order-right-section">{value}</div>
                </div>
              </div>
            )}
            decimalScale={2}
            value={getCartTotal(cart)}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"₹"}
          />
          <div className="order-indi-section">
            <div className="order-left-section">SHIPPING</div>
            <div className="order-right-section">&#8377;{shippingcost}</div>
          </div>
          <CurrencyFormat
            renderText={(value) => (
              <div>
                <div className="order-indi-section">
                  <div className="order-left-section">TOTAL</div>
                  <div className="order-right-section">{value}</div>
                </div>
              </div>
            )}
            decimalScale={2}
            value={getCartTotal(cart)+shippingcost}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"₹"}
          />
        </div>
      </div>
    </div>
  );
}

export default Checkout;
