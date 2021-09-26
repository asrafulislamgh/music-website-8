import React, { useEffect, useState } from "react";
import SelectedInfo from "../Selected-info/SelectedInfo";
import Showcase from "../Showcase/Showcase";
import "./MusicContainer.css";

const MusicContainer = () => {
  const [singers, setSingers] = useState([]);
  useEffect(() => {
    fetch("./singers.json")
      .then((res) => res.json())
      .then((data) => setSingers(data));
  }, []);
  return (
    <div className="music-container">
      <div className="show-case-container">
        {singers.map((singer) => (
          <Showcase key={singer.key} singer={singer}></Showcase>
        ))}
      </div>
      <div>
        <SelectedInfo></SelectedInfo>
      </div>
    </div>
  );
};

export default MusicContainer;
