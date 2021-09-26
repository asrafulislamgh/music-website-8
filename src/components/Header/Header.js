import React from "react";
import logo from "../../img/logo.png";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <div className="container">
        <div className="header-container">
          <img className="logo" src={logo} alt="" />
          <nav className="nav-items">
            <ul>
              <li>
                <a href="/music">Musics</a>
              </li>
              <li>
                <a href="/artists">Artists</a>
              </li>
              <li>
                <a href="/best-songs">Best Songs</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="budget">
        <p>
          The <b>Largest</b> Playback Concert In Sounth Asia
        </p>
        <h3>Total budget: $400000</h3>
      </div>
    </div>
  );
};

export default Header;
