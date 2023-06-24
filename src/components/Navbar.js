import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { auth, googleProvider } from "../config/firebase";
import { signInWithPopup, signOut } from "firebase/auth";
import { useStateValue } from "./Stateprovider";
import axios from "axios";

import Card from "./Card";
import Book from "./Book";
import search_icon from "../images/search.png";
import cart_icon from "../images/cart.png";
import profile from "../images/profile.png";
import "../styles/navbar.css";

function Navbar() {
  const [search, setSearch] = useState("");
  const [bookData, setData] = useState([]);
  // const [{ cart }] = useStateValue();
  const [{ user, books, cart }, dispatch] = useStateValue();
  // const [{ books },dispatch] = useStateValue();

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    auth.onAuthStateChanged((User) => {
      console.log("The ise is", User);
      console.log(User.photoURL);

      if (User) {
        dispatch({
          type: "SET-USER",
          user: User,
        });
      } else {
        dispatch({
          type: "SET-USER",
          user: null,
        });
      }
    });
  }, []);

  const searchBook = (e) => {
    // console.log("searching");
    if (e.key === "Enter") {
      axios
        .get(
          "https://www.googleapis.com/books/v1/volumes?q=" +
            search +
            "&key=AIzaSyBsfcp0MTpH6vJtLXGswahbs0cFcUV5szg" +
            "&maxResults=40"
        )
        .then((res) => setData(res.data.items))
        .catch((err) => console.log(err));

      // dispatch({
      // type: "ADD-BOOKS-SEARCH-RESULT",
      // item: bookData,
      // });
      console.log(bookData);
    }
  };

  return (
    <div>
      <div className="header">
        <NavLink to="/" style={{ textDecoration: "none" }}>
          <div className="website-name">
            <div className="style-colour">Information&nbsp;</div>
            Oasis
          </div>
        </NavLink>
        <div className="center-section">
          <div>&nbsp;Rent&nbsp;</div>
          <div>How it works&nbsp;</div>
          <div>About us&nbsp;</div>
        </div>

        <div className="logo-section">
          {/* <NavLink to="/search"> */}
          {/* <input
                type="text"
                placeholder="Enter here"
                className="search-input"
              /> */}
          <div className="search-section">
            <input
              type="text"
              placeholder="Enter book name"
              className="search-text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyPress={searchBook}
            />
            <img src={search_icon} alt="Search icon" className="logo-search" />
            {/* {} */}
            {/* <Card book={bookData} /> */}
          </div>
          {/* </NavLink> */}

          <NavLink to="/checkout" style={{ textDecoration: "none" }}>
            <img src={cart_icon} alt="Checkout icon" className="logo-cart" />
          </NavLink>
          <div className="checkout-items">{cart?.length}</div>
          {/* ?-for optional chaining */}
          <div className="login">
            <img
              src={profile  }
              alt="Login icon"
              className="logo-profile"
              onClick={signInWithGoogle}
            />
            {/* <div className="user-name">Welcome</div> */}
          </div>
        </div>
      </div>
      <div className="search-results">
        {}
        <Card book={bookData} />
      </div>
    </div>
  );
}

export default Navbar;
