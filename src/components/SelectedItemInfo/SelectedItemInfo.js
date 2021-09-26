import React from "react";

const SelectedItemInfo = (props) => {
  console.log(props.name);
  return (
    <div>
      <h3>Great</h3>
      <img src={props.img} alt="" />
      <h3>{props.name}</h3>
    </div>
  );
};

export default SelectedItemInfo;
