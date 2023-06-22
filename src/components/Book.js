import React from "react";
import "../styles/book.css";
import icon from "../images/cart.png";

const Book = ({ book }) => {
  console.log(book);
  return (
    <>
      {book.map((item) => {
        let cover_img =
          item.volumeInfo.imageLinks.smallThumbnail &&
          item.volumeInfo.imageLinks.smallThumbnail;
        
        let pages=item.volumeInfo.pageCount;
        let author=item.volumeInfo.authors;
        let amount=pages;

        if (cover_img != undefined ) {
          return (
            <div className="card">
              <div className="card-bg">
                <img src={cover_img} alt="" className="book-image" />
                <div className="book-name">{item.volumeInfo.title}</div>
                <div className="author">{author}</div>
                <div className="book-price">&#8377;{pages}</div>
              </div>
            </div>
          );
        }
      })}
    </>
  );
};

export default Book;
