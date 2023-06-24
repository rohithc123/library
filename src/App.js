import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import Working from "./components/Working";
import Bookfinder from "./components/Bookfinder";
import Checkout from "./components/Checkout";
import SearchResult from "./components/SearchResult";
import Card from "./components/Card";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import Search from "./components/Search";
import book_cover from "./images/bookcover.jfif";
import Payment from "./components/Payment";

const promise = loadStripe(
  "pk_test_51N9vIeSBKLOcXfw1fA2TIuFA7sx4i2duJWPszSgNj1O1rlFLNcjxta8dMi1WTuwehdtSBIqN6OnWNx9j9hAU4SBa00Riqa5z0D"
);

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <Homepage />
                {/* <Working /> */}
              </>
            }
          />
          <Route
            path="/working"
            element={
              <>
                <Navbar />
                <Working/>
              </>
            }
          />
          <Route
            path="/search"
            element={
              <>
                <Navbar />
                <Search />
                <Homepage />
                <Working />
              </>
            }
          />
          <Route
            path="/checkout"
            element={
              <>
                <Navbar />
                <Checkout />
              </>
            }
          />
          <Route
            path="/payment"
            element={
              <>
                <Navbar />
                <Elements stripe={promise}>
                  <Payment />
                </Elements>
              </>
            }
          />
        </Routes>
      </Router>

      {/* <Bookfinder/> */}
    </div>
  );
}

export default App;
