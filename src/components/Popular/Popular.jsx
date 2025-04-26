import React from "react";
import CarCard from "../CarCard/CarCard";
import "./popular.css";

const Popular = () => {
  return (
    <div className="popular">
      <div className="container">
        <section className="popular-sec">
          <div className="top">
            <h3>Popular Car</h3>
            <span>View All</span>
          </div>
          <div className="cars">
            <CarCard
            id='1'
              name="Koenigsegg"
              subtitle="Sport"
              image="../../../public/images/koenigsegg.png"
              gasoline="90L"
              capacity="2"
              price="$99.00"
            />
            <CarCard
            id='2'
              name="Nissan GT-R"
              subtitle="Sport"
              image="../../../public/images/nissan.png"
              gasoline="80L"
              capacity="2"
              price="$80.00"
            />
            <CarCard
            id='3'
              name="Rolls-Royce"
              subtitle="Sedan"
              image="../../../public/images/rolls.png"
              gasoline="70L"
              capacity="4"
              price="$96.00"
            />
            <CarCard
            id='4'
              name="Nissan GT-R"
              subtitle="Sport"
              image="../../../public/images/nissan.png"
              gasoline="80L"
              capacity="2"
              price="$80.00"
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Popular;
