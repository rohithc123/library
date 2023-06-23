import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { auth, googleProvider } from "../config/firebase";
import { signInWithPopup, signOut } from "firebase/auth";
import { useStateValue } from "./Stateprovider";
import axios from "axios";

import Card from "./Card";
import search_icon from "../images/search.png";
import cart_icon from "../images/cart.png";
import profile from "../images/profile.png";
import "../styles/navbar.css";

function Navbar() {
  const [search, setSearch] = useState("");
  const [bookData, setData] = useState([]);
  const [{ cart }] = useStateValue();
  const [{ user },dispatch] = useStateValue();

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
          type:'SET-USER',
          user:User
        })
      } else {
        dispatch({
          type: 'SET-USER',
          user: null
        })
      }
    });
  }, []);

  const searchBook = (e) => {
    if (e.key === "Enter") {
      axios
        .get(
          "https://www.googleapis.com/books/v1/volumes?q=" +
            search +
            "&key=APIkey" +
            "&maxResults=40"
        )
        .then((res) => setData(res.data.items))
        .catch((err) => console.log(err));
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
            />
            <img
              src={search_icon}
              alt="Search icon"
              className="logo-search"
              // value={search}
              // onChange={(e) => setSearch(e.target.value)}
              // onKeyPress={searchBook}
            />
            {}
            {/* <Card book={bookData} /> */}
          </div>
          {/* </NavLink> */}

          <NavLink to="/checkout" style={{ textDecoration: "none" }}>
            <img src={cart_icon} alt="Checkout icon" className="logo-cart" />
          </NavLink>
          {/* ?-for optional chaining */}
          <div>{cart?.length}</div>
          <div className="login">
            <img
              src={(!user)?profile:user.photoURL}
              alt="Login icon"
              className="logo-profile"
              onClick={signInWithGoogle}
            />
            {/* <div className="user-name">Welcome</div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
