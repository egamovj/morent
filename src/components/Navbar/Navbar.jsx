import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav>
      <div className="left">
        <img src="../../public/icons/Logo.svg" alt="Morent Logo" />
        <div className="seacrh">
            <img src="../../public/icons/search-normal.svg" alt="Search icon" />
            <input type="search" placeholder="Search something here" />
        </div>
      </div>
      <div className="right"></div>
    </nav>
  );
};

export default Navbar;
