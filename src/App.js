import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import Working from "./components/Working";
import Bookfinder from "./components/Bookfinder";
import Checkout from "./components/Checkout";
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
                <Working />
                <Card
                  title="home-page-book-1"
                  author="phoenix"
                  price="900"
                  cover={book_cover}
                  id="1"
                />
                <Card
                  title="home-page-book-2"
                  author="dragon"
                  price="300"
                  cover={book_cover}
                  id="2"
                />
                <Card
                  title="home-page-book-3"
                  author="jisoo"
                  price="200"
                  cover={book_cover}
                  id="3"
                />
                <Card
                  title="home-page-book-4"
                  author="jett"
                  price="399"
                  cover={book_cover}
                  id="4"
                />
                <Card
                  title="home-page-book-5"
                  author="raze"
                  price="499"
                  cover={book_cover}
                  id="5"
                />
                <Card
                  title="home-page-book-6"
                  author="brim"
                  price="800"
                  cover={book_cover}
                  id="6"
                />
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
                {/* <Card title="home-page-book-1" author="phoenix" price="900" /> */}
                {/* <Card title="home-page-book-2" author="dragon" price="300" /> */}
                {/* <Card title="home-page-book-3" author="jisoo" price="200" /> */}
                {/* <Card title="home-page-book-4" author="jett" price="399" /> */}
                {/* <Card title="home-page-book-5" author="raze" price="499" /> */}
                {/* <Card title="home-page-book-6" author="brim" price="800" /> */}
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
