import React from "react";
import "./SelectedInfo.css";

const SelectedInfo = (props) => {
  const { selectedItems } = props;
  let total = 0;
  selectedItems.map((selectedItem) => (total = total + selectedItem.salary));

  return (
    <div className="selected-container">
      <div className="info-part">
        <p>
          Selected Singer(s): <b>{selectedItems.length}</b>
        </p>
        <br />
        <p>
          Total Cost: <b>${total}</b>
        </p>
      </div>

      {selectedItems.map((items) => (
        <div key={items.key} className="selected-singer">
          <img src={items.img} alt="" />
          <div className="cart-info">
            <h3>{items.name}</h3>
            <h4>${items.salary}</h4>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SelectedInfo;
