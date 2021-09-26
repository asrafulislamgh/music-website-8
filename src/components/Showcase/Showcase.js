import React from "react";
import "./Showcase.css";

const Showcase = (props) => {
  const { singer } = props;
  const { name, salary, img, rating, keysongs, awards } = singer;
  return (
    <div className="singer-container">
      <div className="image-cropper">
        <img className="singer-img" src={img} alt="" />
      </div>
      <h3>{name}</h3>
      <h4>Key Songs: {keysongs}</h4>
      <h4>Awards: {awards}</h4>
      <h4>Remumeration: ${salary}</h4>
      <h5>Rating: {rating}</h5>
      <button className="general-btn">Add to Cart</button>
    </div>
  );
};

export default Showcase;
