import React, { useRef, useEffect } from "react";
import CheckoutCard from "./CheckoutCard";
import { useStateValue } from "./Stateprovider";
import { NavLink, useNavigate } from "react-router-dom";
import { getCartTotal } from "./Reducer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import CurrencyFormat from "react-currency-format";
import icon from "../images/bookcover.jfif";
import "../styles/checkout.css";

function Checkout() {
  const [{ user, cart }, dispatch] = useStateValue();
  const shippingcost = cart?.length > 0 ? 75 : 0;
  const navigate = useNavigate();

  //   const summa = () => {};
  const removecartitems = () => {
    toast.success("Order Successfully Placed", {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  function timeout(delay: number) {
    return new Promise( res => setTimeout(res, delay) );
}

  const toastError = () =>
    toast.error("Please Log In", { position: toast.POSITION.TOP_CENTER });

  const toastadditems = () => {
    toast.error("Add Items to cart", {
      position: toast.POSITION.TOP_CENTER,
    });
  };
  const toastSuccess = async () => {
    toast.success("Order Successfully Placed", {
      position: toast.POSITION.TOP_CENTER,
    });
    dispatch({
      type: "EMPTY-BASKET",
    });
    await timeout(5000);
    navigate("/");
  };

  useEffect(() => {
    // const handleClickScroll = () => {
    const element = document.getElementById("checkout-page");
    if (element) {
      //   element.scrollIntoView({
      //     behavior: "smooth",
      //     block:"start"
      //   });

      window.scrollTo({
        behavior: "smooth",
        top:
          element.getBoundingClientRect().top -
          document.body.getBoundingClientRect().top -
          100,
      });
    }
    // };
  });

  return (
    <div className="checkout" id="checkout-page">
      <div className="checkout-header">Checkout</div>
      <div className="checkout-section">
        <div className="billing-details">
          <form action="" style={{ width: "100%", height: "100%" }}>
            BILLING DETAILS
            <div className="checkout-name">
              <div className="checkout-input">
                <div>NAME</div>
                <input
                  type="text"
                  required
                  className="checkout-input-field"
                  value={user ? user.displayName : ""}
                />
              </div>
            </div>
            <div className="checkout-name">
              <div className="checkout-input">
                <div>E-MAIL</div>
                <input
                  type="text"
                  required
                  className="checkout-input-field"
                  value={user ? user.email : ""}
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
            {/* <NavLink to="/payment"> */}
            <input
              type="submit"
              id=""
              value="Place your order"
              className="checkout-submit-btn"
              //   disabled={!user ? true : false}
              onClick={
                !user
                  ? toastError
                  : cart.length === 0
                  ? toastadditems
                  : toastSuccess
              }
            />
            {/* </NavLink> */}
          </form>

          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
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
            value={getCartTotal(cart) + shippingcost}
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
