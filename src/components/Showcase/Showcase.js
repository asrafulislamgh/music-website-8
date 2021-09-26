import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./Showcase.css";
import { useState } from "react/cjs/react.development";

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
        <b>Rating:</b> {rating}
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
        <i class="icons fab fa-facebook"></i>
        <i class="icons fab fa-twitter"></i>
        <i class="icons fas fa-envelope"></i>
        <i class="icons fas fa-phone"></i>
      </p>
    </div>
  );
};

export default Showcase;
