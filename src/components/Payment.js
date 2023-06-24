import React, { useState, useEffect } from "react";
import CheckoutCard from "./CheckoutCard";
import { useStateValue } from "./Stateprovider";
import { NavLink, useNavigate } from "react-router-dom";
import { getCartTotal } from "./Reducer";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import icon from "../images/bookcover.jfif";
// import axios from "./Axios";
import axios from "axios";
import "../styles/payment.css";

function Payment() {
  const [{ cart }, dispatch] = useStateValue();
  const navigate = useNavigate();

  const shippingcost = cart?.length > 0 ? 75 : 0;

  const stripe = useStripe();
  const elements = useElements();

  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState(true);

//   useEffect(() => {
    // const getClientSecret = async () => {
    //   const response = await axios.get(
        // `http://127.0.0.1:5001/information-oasis/us-central1/api/payment/create?total=${
        //   (getCartTotal(cart)) * 100 }`
    //   );
      // axios({
      //   method: "post",
      //   //Stripe expects the total in currencies subunits that is why *1000
      //   url: `http://127.0.0.1:5001/information-oasis/us-central1/api/payment/create?total=${
      //     (getCartTotal(cart) + shippingcost) * 100
      //   }`,
      // });
    //   setClientSecret(response.data.clientSecret);
    // };
    // getClientSecret();
//   }, [cart]);

  // useEffect(() => {
  //   const getClientSecret = async () => {
  //       const response = await axios({
  //           method: 'post',
  //           //Stripe expects the total in currencies subunits that is why *1000
  //           url: `/payments/create?total=${(getCartTotal(cart))*100}`
  //          });

  //     setClientSecret(response.data.clientSecret);

  //     getClientSecret();
  //   };
  // }, [cart]);

  //   console.log('the secret is' ,clientSecret);

  //   const handleSubmit = async (e) => {
  //     e.preventDefault();
  //     setProcessing(true);

  //     const payload = await stripe
  //       .confirmCardPayment(clientSecret, {
  //         payment_method: {
  //           card: elements.getElement(CardElement),
  //         },
  //       })
  //       .then(({ paymentIntent }) => {
  //         setSucceeded(true);
  //         setError(null);
  //         setProcessing(false);

  //         navigate.replace("/");
  //       });
  //   };

  //   const handleChange = (e) => {
  //     setDisabled(e.empty);
  //     setError(e.error ? e.error.message : "");
  //   };

  console.log("the secret is ", clientSecret);

  const handleSubmit = async (event) => {
    event.preventDefault();
    //button disabled while credit card details are being entered
    setProcessing(true);

    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
        //paymenyIntent = paymeny confirmation

        setSucceeded(true);
        setError(null);
        setProcessing(false);

        dispatch({
          type: "EMPTY-BASKET",
        });

        //after completion of payment pushing them to orders page
        navigate.replace("/checkout");
      });
  };

  const handleChange = (event) => {
    //listen to cardelement and disply error as customer types

    setDisabled(event.empty);
    setError(event.error ? event.erroe.message : "");
  };

  return (
    <div className="checkout">
      <div className="checkout-header">Checkout</div>
      <div className="checkout-section">
        <div className="billing-details">
          <form action="" style={{ width: "100%", height: "100%" }}>
            PAYMENT DETAILS
            <div className="payment-details">stripe</div>
            <form action="">
              <CardElement onChange={handleChange} />
              <div className="paymeny-submit">
                <button disabled={processing || disabled || succeeded}>
                  <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                </button>
              </div>
            </form>
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

export default Payment;
