import React from "react";
import "./hero.css";

const Hero = () => {
  return (
    <div className="container">
      <section className="hero">
        <div className="top">
          <div className="platform">
            <h2>
              The Best Platform <br /> for Car Rental
            </h2>
            <p>
              Ease of doing a car rental safely and <br /> reliably. Of course at a low
              price.
            </p>
            <button>Rental Car</button>
          </div>
          <div className="easy-way">
            <h2>
              Easy way to rent a <br /> car at a low price
            </h2>
            <p>
              Providing cheap car rental services <br /> and safe and comfortable
              facilities.
            </p>
            <button>Rental Car</button>
          </div>
        </div>
        <div className="bottom"></div>
      </section>
    </div>
  );
};

export default Hero;
