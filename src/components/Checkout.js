import React from "react";
import CheckoutCard from "./CheckoutCard";
import "../styles/checkout.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./Stateprovider";
import { getCartTotal } from "./Reducer";

import icon from "../images/bookcover.jfif";

function Checkout() {
  const [{ cart }, dispatch] = useStateValue();

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
            <input
              type="submit"
              id=""
              value="Place your order"
              className="checkout-submit-btn"
            />
          </form>
        </div>
        <div className="order-details">
          <div className="order-header">ORDER DETAILS</div>
          <div className="order-indi-section" style={{ marginTop: "3.8%" }}>
            <div className="order-left-section">PRODUCT</div>
            <div className="order-right-section" style={{ fontWeight: "700" }}>
              SUBTOTAl
            </div>
          </div>
          <CheckoutCard title="First book" price="300" image={icon} />
          <CheckoutCard title="Second book" price="400" image={icon} />
          <CheckoutCard title="Second book" price="500" image={icon} />
          <CheckoutCard title="Second book" price="600" image={icon} />

          <CurrencyFormat
            renderText={(value) => (
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
            )}
            decimalScale={2}
            value={getCartTotal(cart)}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"₹"}
          />
          <div
            className="order-indi-section"
            style={{ backgroundColor: "rgba(161, 161, 161,0.05)" }}
          >
            <div className="order-left-section">SHIPPING</div>
            <div className="order-right-section">&#8377;75</div>
          </div>
          <div className="order-indi-section">
            <div className="order-left-section">TOTAL</div>
            <div className="order-right-section">&#8377;1767</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
