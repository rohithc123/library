import React,{ useEffect } from "react";
import "../styles/homepage.css";
import books from "../images/books-stacked.png";

import { auth, googleProvider } from "../config/firebase";
import { useStateValue } from "./Stateprovider";

function Homepage() {

  useEffect(() => {
    // const handleClickScroll = () => {
    const element = document.getElementById("home-page");
    if (element) {
      //   element.scrollIntoView({
      //     behavior: "smooth",
      //     block:"start"
      //   });

      window.scrollTo({
        behavior: "smooth",
        top:
          element.getBoundingClientRect().top -
          document.body.getBoundingClientRect().top ,
      });
    }
  });

  return (
    <div>
      <div className="home-section" id="home-page">
        <div className="left-side">
          <div className="left-side-text">
            <div className="info-bold">
              Discover the latest books without having to
            </div>
            <div className="left-side-bg">buy them</div>
            <div className="info-small">
              With our book lending site, you can access a library of millions
              of books
            </div>
            {/* <div className="rent">
              <div className="rent-btn" onClick={signInWithGoogle}>
                <p>{user ? user.auth.displayName :"Log In"}</p>
              </div>
            </div> */}
          </div>
        </div>
        <div className="right-side">
          <div className="books-section">
            <img src={books} alt="Books stacked" className="books" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
