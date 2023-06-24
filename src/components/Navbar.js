import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { auth, googleProvider } from "../config/firebase";
import { signInWithPopup, signOut } from "firebase/auth";
import { useStateValue } from "./Stateprovider";
import axios from "axios";
// import { useToasts } from 'react-toast-notifications'

import Card from "./Card";
// import Book from "./Book";
import search_icon from "../images/search.png";
import cart_icon from "../images/cart.png";
import profile from "../images/profile.png";
import "../styles/navbar.css";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Navbar() {
  const [search, setSearch] = useState("");
  // const [link, setLink] = useState("/");

  const [bookData, setData] = useState([]);
  const [{ user, books, cart, link }, dispatch] = useStateValue();

  const toastErrorlogin = () => {
    toast.error("Please Log In", { position: toast.POSITION.TOP_CENTER });
    console.log("log in");
    // alert("Log In")
  };

  const toastadditems = () => {
    toast.error("Add Items to cart", {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  const bookSearch = useRef(null);

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);

      dispatch({
        type: "SET-LINK",
        link: "/checkout",
      });
    } catch (err) {
      console.error(err);
    }
  };

  const signOutWithGoogle = async () => {
    try {
      signOut(auth).then(() => {
        console.log("Signed Out");
        dispatch({
          type: "SET-USER",
          user: null,
        });
        console.log("User");
      });
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    auth.onAuthStateChanged((User) => {
      console.log("The user is", User);
      console.log(User.photoURL);

      if (User) {
        dispatch({
          type: "SET-USER",
          user: User,
        });
        dispatch({
          type: "SET-LINK",
          link: "/checkout",
        });
      } else {
        dispatch({
          type: "SET-USER",
          user: null,
        });
      }
    });

    if (bookSearch) {
      bookSearch.current.focus();
    }
  }, []);

  const searchBook = (e) => {
    if (e.key === "Enter" && search.length > 0) {
      const element = document.getElementById("search-page");
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
      console.log("finding");
      axios
        .get(
          "https://www.googleapis.com/books/v1/volumes?q=" +
            search +
            "&key=AIzaSyBsfcp0MTpH6vJtLXGswahbs0cFcUV5szg" +
            "&maxResults=40"
        )
        .then((res) => setData(res.data.items))
        .catch((err) => console.log(err));

      dispatch({
        type: "SET-SEARCH",
        search: search,
      });

      console.log(bookData);
    } else {
      console.log("error");
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
        <NavLink to="/working" style={{ textDecoration: "none" }}>
          <div className="center-section">
            <div>How it works&nbsp;</div>
          </div>
        </NavLink>

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
              minLenght="1"
              required
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyPress={searchBook}
              ref={bookSearch}
            />
            <img src={search_icon} alt="Search icon" className="logo-search" />
            {/* {} */}
            {/* <Card book={bookData} /> */}
          </div>
          {/* </NavLink> */}

          <NavLink to={link} style={{ textDecoration: "none" }}>
            <img
              src={cart_icon}
              alt="Checkout icon"
              className="logo-cart"
              onClick={!user ? toastErrorlogin : console.log("logged in")}
            />

            <ToastContainer
              position="top-center"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
            />
          </NavLink>
          <div className="checkout-items">{cart?.length}</div>
          {/* ?-for optional chaining */}
          <div className="login">
            <img
              src={user ? user && user?.photoURL : profile}
              alt="Login icon"
              className="logo-profile"
              onClick={!user ? signInWithGoogle : signOutWithGoogle}
            />
            {/* <div className="user-name">Welcome</div> */}
          </div>
        </div>
      </div>
      <div className="search-results" id="search-page">
        {}
        <Card book={bookData} />
      </div>
    </div>
  );
}

export default Navbar;
