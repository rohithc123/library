import React from "react";
import "../styles/search.css";

function search() {
  return (
    <div className="search-area">
      <div>
        <div>
            Search InformationOasis.com
        </div>
        <input type="text" placeholder="Type to search.." className="text-field" />
      </div>
    </div>
  );
}

export default search;
