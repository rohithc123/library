import React from "react";
import "../styles/navbar.css";
import search from "../images/search.png";
import cart from "../images/cart.png";
import profile from "../images/profile.png";
// import signInWithGoogle from "./auth";
import {auth,googleProvider} from "../config/firebase";
import {signInWithPopup,signOut} from "firebase/auth";


function Navbar() {
  
  const signInWithGoogle = async () =>{
    try{
        await signInWithPopup(auth,googleProvider);
    }catch(err){
        console.error(err);
    }
};

  return (
    <div>
      <div className="header">
        <div className="website-name">
          <div className="style-colour">Information&nbsp;</div>
          Oasis
        </div>
        <div className="center-section">
          <div>&nbsp;Rent&nbsp;</div>
          <div>How it works&nbsp;</div>
          <div>About us&nbsp;</div>
        </div>

        <div className="logo-section">
          <img src={search} alt="Search icon" className="logo-search" />
          <img src={cart} alt="Checkout icon" className="logo-cart" />
          <img src={profile} alt="Login icon" className="logo-profile" onClick={signInWithGoogle}/>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
