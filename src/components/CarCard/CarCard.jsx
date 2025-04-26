import React from "react";
import { Link } from "react-router-dom";
import "./carCard.css";

const CarCard = ({ id, name, subtitle, image, capacity, price, gasoline }) => {
  return (
    <Link to={`/car/${id}`} className="car">
      <div className="title">
        <div className="name">
          <h2>{name}</h2>
          <span>{subtitle}</span>
        </div>
        <img src="../../../public/images/Like.png" alt="" />
      </div>
      <img src={image} alt={name} className="carImage" />
      <div className="car-sett">
        <div className="">
          <img src="../../../public/images/gas-station.png" alt="Car Image" />
          <span>{gasoline}</span>
        </div>
        <div className="">
          <img src="../../../public/images/manual.png" alt="" />
          <span>Manual</span>
        </div>
        <div className="">
          <img src="../../../public/images/profile-2user.png" alt="" />
          <span>{capacity} People</span>
        </div>
      </div>
      <div className="price">
        <p>
          {price}/<span>day</span>
        </p>
        <button>Rent Now</button>
      </div>
    </Link>
  );
};

export default CarCard;
