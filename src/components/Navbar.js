import React from "react";
import "../styles/navbar.css";
import search from "../images/search.png";
import { NavLink } from "react-router-dom";
import cart from "../images/cart.png";
import profile from "../images/profile.png";
import { auth, googleProvider } from "../config/firebase";
import { signInWithPopup, signOut } from "firebase/auth";

function Navbar() {
  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (err) {
      console.error(err);
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
            <img src={search} alt="Search icon" className="logo-search" />
          </div>
          {/* </NavLink> */}

          <NavLink to="/checkout" style={{ textDecoration: "none" }}>
            <img src={cart} alt="Checkout icon" className="logo-cart" />
          </NavLink>
          <div className="login">
            <img
              src={profile}
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
