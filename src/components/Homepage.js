import React from "react";
import "../styles/homepage.css";

function Homepage() {
  return (
    <div>
      <div className="home-section">
        <div className="left-side">
          <div className="left-side-text">
            <div className="info-bold">
              Discover the latest books without having to 
              <div className="left-side-bg">buy them</div>
            </div>
            <div className="info-small">
              With our book lending site, you can access a library of millions
              of books
            </div>
            <div className="rent">
              <div className="rent-btn">Rent now</div>
            </div>
          </div>
        </div>
        <div className="right-side">Image</div>
      </div>
    </div>
  );
}

export default Homepage;
