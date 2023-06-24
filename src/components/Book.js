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

        let pages = item.volumeInfo.pageCount;
        let author = item.volumeInfo.authors;
        let amount = pages;

        if (cover_img != undefined) {
          return (
            <div className="b-card">
              <div className="b-card-bg">
                <img src={cover_img} alt="" className="b-book-image" />
                <div className="b-book-name">{item.volumeInfo.title}</div>
                <div className="b-author">{author}</div>
                <div className="b-book-price">&#8377;{pages}</div>
              </div>
            </div>
          );
        }
      })}
    </>
  );
};

export default Book;
