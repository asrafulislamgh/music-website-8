import React, { useEffect, useState } from "react";
import SelectedInfo from "../Selected-info/SelectedInfo";
import Showcase from "../Showcase/Showcase";
import "./MusicContainer.css";

const MusicContainer = () => {
  const [singers, setSingers] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  useEffect(() => {
    fetch("./singers.json")
      .then((res) => res.json())
      .then((data) => setSingers(data));
  }, []);
  const handleEvent = (item) => {
    const newArray = [...selectedItems, item];
    setSelectedItems(newArray);
  };
  return (
    <div className="music-container">
      <div className="show-case-container">
        {singers.map((singer) => (
          <Showcase
            key={singer.key}
            singer={singer}
            handleEvent={handleEvent}
          ></Showcase>
        ))}
      </div>
      <div className="selected-container">
        <SelectedInfo selectedItems={selectedItems}></SelectedInfo>
      </div>
    </div>
  );
};

export default MusicContainer;
