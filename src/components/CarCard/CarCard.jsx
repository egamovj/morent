import React from "react";
import "./carCard.css";

const CarCard = ({ name, subtitle, image, capacity, price, gasoline }) => {
  return (
    <div className="car">
      <div className="title">
        <div className="name">
          <h2>{name}</h2>
          <span>{subtitle}</span>
        </div>
        <img src="" alt="" />
      </div>
      <img src={image} alt={name} />
      <div className="car-sett">
        <div className="">
          <img src="" alt="" />
          <span>{gasoline}</span>
        </div>
        <div className="">
          <img src="" alt="" />
          <span>Manual</span>
        </div>
        <div className="">
          <img src="" alt="" />
          <span>{capacity} People</span>
        </div>
      </div>
      <div className="price">
        <p>
          {price} <span>day</span>
        </p>
        <button>Rent Now</button>
      </div>
    </div>
  );
};

export default CarCard;
