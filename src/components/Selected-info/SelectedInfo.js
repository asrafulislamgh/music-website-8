import React from "react";
import SelectedItemInfo from "../SelectedItemInfo/SelectedItemInfo";
import "./SelectedInfo.css";

const SelectedInfo = (props) => {
  const { selectedItems } = props;
  let total = 0;
  selectedItems.map((selectedItem) => {
    total = total + selectedItem.salary;
  });
  return (
    <div className="selected-container">
      <h3>Selected Singer(s): {selectedItems.length}</h3>
      <br />
      <h3>Total Cost: ${total}</h3>
    </div>
  );
};

export default SelectedInfo;
