import React from "react";
import "../styles/card.css";
import icon from "../images/bookcover.jfif";
import { useStateValue } from "./Stateprovider";

function Card ({ title, author, price }) {
  const [{cart}, dispatch] = useStateValue();

   console.log("basket",cart);
  const addToCart = async() => {
    dispatch({
      type: "ADD-TO-CART",
      item: {
        // id: id,
        title: title,
        author: author,
        price: price,
        // rating: rating,
      },
    });
   
  };

  return (
    <>
      {/* {book?.map((item) => {
        let cover_img =
          item.volumeInfo.imageLinks.smallThumbnail &&
          item.volumeInfo.imageLinks.smallThumbnail;

        let pages = item.volumeInfo.pageCount;
        let author = item.volumeInfo.authors;
        let title=item.volumeInfo.title;
        let amount = pages;

        if (cover_img != undefined) {
          return (
            <div>
              <div className="card">
                <div className="card-image">
                  <div className="card-child card-amount">&#8377; {amount}</div>
                  <img src={cover_img} alt="" className="card-child image" />
                </div>
                <div className="card-info">
                  <div className="card-book-name">{title}</div>
                  <div className="card-author">
                    {author}
                    <button className="card-add-cart">Add to Cart</button>
                  </div>
                </div>
              </div>
            </div>
          );
        }
      })} */}
      <div>
        <div className="card">
          <div className="card-image">
            <div className="card-child card-amount">&#8377; {price}</div>
            <img src={icon} alt="" className="card-child image" />
          </div>
          <div className="card-info">
            <div className="card-book-name">{title}</div>
            <div className="card-author">
              {author}
              <button className="card-add-cart" onClick={addToCart}>Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
