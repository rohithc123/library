import React from 'react'
import { useStateValue } from "./Stateprovider";
import axios from "axios";


import Card from "./Card";


function SearchResult() {
  const [{ search }, dispatch] = useStateValue();


//   const [{books}] = useStateValue();
  return (
    <div>
      <div>
       {/* Result */}
      </div>
    </div>
  )
}

export default SearchResult;
