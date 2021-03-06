import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./Showcase.css";
import { useState } from "react";
import Rating from "react-rating";

const Showcase = (props) => {
  const { handleEvent } = props;
  const { singer } = props;
  const { name, salary, img, rating, keysongs, awards } = singer;
  const [disabled, setDisabled] = useState(false);
  return (
    <div className="singer-container">
      <div className="image-cropper">
        <img className="singer-img" src={img} alt="" />
      </div>
      <h2>{name}</h2>
      <p>
        <b>Key Songs:</b> {keysongs}
      </p>
      <p>
        <b>Awards:</b> {awards}
      </p>
      <p>
        <b>Remumeration:</b> ${salary}
      </p>
      <p>
        <b>Rating: </b>
        <Rating
          className="rating"
          initialRating={rating}
          readonly
          emptySymbol="far fa-star"
          fullSymbol="fas fa-star"
          fractions={2}
        />
      </p>
      <button
        disabled={disabled}
        className="general-btn"
        onClick={() => {
          handleEvent(singer);
          setDisabled(true);
        }}
      >
        {" "}
        <FontAwesomeIcon className="cart-icon" icon={faShoppingCart} />
        Add to Cart
      </button>
      <p className="info-icon">
        <i className="icons fab fa-facebook"></i>
        <i className="icons fab fa-twitter"></i>
        <i className="icons fas fa-envelope"></i>
        <i className="icons fas fa-phone"></i>
      </p>
    </div>
  );
};

export default Showcase;
