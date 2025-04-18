import React from "react";
import "./hero.css";

const Hero = () => {
  return (
    <div className="hero-sec">
      <div className="container">
        <section className="hero">
          <div className="top">
            <div className="platform">
              <h2>
                The Best Platform <br /> for Car Rental
              </h2>
              <p>
                Ease of doing a car rental safely and <br /> reliably. Of course
                at a low price.
              </p>
              <button>Rental Car</button>
            </div>
            <div className="easy-way">
              <h2>
                Easy way to rent a <br /> car at a low price
              </h2>
              <p>
                Providing cheap car rental services <br /> and safe and
                comfortable facilities.
              </p>
              <button>Rental Car</button>
            </div>
          </div>
          <div className="bottom">
            <div className="pick-up">
              <div className="mark">
                <img src="../../public/icons/mark.svg" alt="" />
                <h3>Pick-Up</h3>
              </div>
              <div className="selects">
                <div>
                  <span>Locations</span>
                  <select name="" id="">
                    <option value="">Select your city</option>
                  </select>
                </div>
                <div className="line"></div>
                <div>
                  <span>Date</span>
                  <select name="" id="">
                    <option value="">Select your date</option>
                  </select>
                </div>
                <div className="line"></div>
                <div>
                  <span>Time</span>
                  <select name="" id="">
                    <option value="">Select your time</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="swap">
              <img src="../../public/icons/Swap.svg" alt="" />
            </div>
            <div className="drop-off">
              <div className="mark">
                <img src="../../public/icons/mark.svg" alt="" />
                <h3>Drop=Off</h3>
              </div>
              <div className="selects">
                <div>
                  <span>Locations</span>
                  <select name="" id="">
                    <option value="">Select your city</option>
                  </select>
                </div>
                <div className="line"></div>
                <div>
                  <span>Date</span>
                  <select name="" id="">
                    <option value="">Select your date</option>
                  </select>
                </div>
                <div className="line"></div>
                <div>
                  <span>Time</span>
                  <select name="" id="">
                    <option value="">Select your time</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Hero;
