import React from "react";
import "../styles/working.css";

function Working() {
  return (
    <div className="w-header">
        <div className="w-header-text">
            How it Works?
        </div>
      <div className="w-home-section">
        <div className="w-left-side">
          <div className="w-left-side-text">
            <div className="w-left-info">
              <div className="w-numbers">1</div>
              <div className="w-text">&nbsp;Find a book you want to read</div>
            </div>
            <div className="w-left-info">
              <div className="w-numbers">2</div>
              <div className="w-text">
                &nbsp;Get it delivered at your doorstep for free
              </div>
            </div>
            <div className="w-left-info">
              <div className="w-numbers">3</div>
              <div className="w-text">
                &nbsp;Exchange it for your next read,from the comfort at your home
              </div>
            </div>
          </div>
        </div>
        <div className="w-right-side">
          <div className="w-right-side-text">
            <div className="w-info-bold">
              It's as&nbsp;
              <div className="w-left-side-bg">easy</div>
              &nbsp;as 1,2,3
            </div>
            <div className="w-info-small">
              Simple and effective way for renting a book
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Working;
