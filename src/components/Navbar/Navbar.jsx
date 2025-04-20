import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="container">
      <nav>
        <div className="left">
          <img src="../../../public/icons/Logo.svg" alt="Morent Logo" />
          <div className="search">
            <img src="../../../public/icons/search-normal.svg" alt="Search icon" />
            <input type="search" placeholder="Search something here" />
            <img src="../../../public/icons/filter.svg" alt="Filter icon" />
          </div>
        </div>
        <div className="right">
          <div className="heart">
            <img src="../../../public/icons/heart.svg" alt="Heart icon" />
          </div>
          <div className="not-ion">
            <img
              src="../../../public/icons/notification.svg"
              alt="Notification icon"
            />
          </div>
          <div className="setting">
            <img src="../../../public/icons/setting-2.svg" alt="Setting icon" />
          </div>
          <div className="profile">
            <img src="../../../public/images/Profil.png" alt="Profil picture" />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
