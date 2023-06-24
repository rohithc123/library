import React,{ useState } from 'react';
import Book from "./Book";
import axios from "axios";
import {bookapi} from "../apikeys.txt"


function Bookfinder() {
    const [search,setSearch] = useState("");
    // const API_KEY=process.env.REACT_APP_BOOK_API;
    const [bookData,setData] = useState([]);
    const searchBook = (e) =>{
        if(e.key==="Enter"){
            axios.get('https://www.googleapis.com/books/v1/volumes?q='+search+'&key=AIzaSyBsfcp0MTpH6vJtLXGswahbs0cFcUV5szg'+'&maxResults=40')
            .then(res => setData(res.data.items))
            .catch(err=>console.log(err))
        }
    }
    return (
    <div>
      <div>
        <input type="text"  value={search} onChange={e=>setSearch(e.target.value)}
        onKeyPress={searchBook}/>
        {

        }<Book book={bookData}/>

      </div>
    </div>
  )
}

export default Bookfinder
