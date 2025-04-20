import React from "react";
import CarCard from "../CarCard/CarCard";
import "./recomendation.css";

const Recomendation = () => {
  return (
    <div id="rec">
      <div className="container">
        <section className="rec">
          <h3>Recomendation Car</h3>
          <div className="rec-car">
            <CarCard
              name="All New Rush"
              subtitle="SUV"
              image="../../../public/images/new-rush.png"
              gasoline="70L"
              capacity="6"
              price="$72.00"
            />
            <CarCard
              name="CR-V"
              subtitle="SUV"
              image="../../../public/images/cr-v.png"
              gasoline="80L"
              capacity="6"
              price="$80.00"
            />
            <CarCard
              name="All New Terios"
              subtitle="SUV"
              image="../../../public/images/new-terios.png"
              gasoline="90L"
              capacity="6"
              price="$74.00"
            />
            <CarCard
              name="CR-V"
              subtitle="SUV"
              image="../../../public/images/cr-v.png"
              gasoline="80L"
              capacity="6"
              price="$80.00"
            />
            <CarCard
              name="MG ZX Exclusive"
              subtitle="Hatchback"
              image="../../../public/images/mg-zx.png"
              gasoline="70L"
              capacity="4"
              price="$76.00"
            />
            <CarCard
              name="New MG ZS"
              subtitle="SUV"
              image="../../../public/images/mg-zs.png"
              gasoline="80L"
              capacity="6"
              price="$80.00"
            />
            <CarCard
              name="MG ZX Excite"
              subtitle="Hatchback"
              image="../../../public/images/mg-zx.png"
              gasoline="90L"
              capacity="4"
              price="$74.00"
            />
            <CarCard
              name="New MG ZS"
              subtitle="SUV"
              image="../../../public/images/mg-zs.png"
              gasoline="80L"
              capacity="6"
              price="$80.00"
            />
          </div>
        </section>
        <button className="show-more">Show more car</button>
      </div>
    </div>
  );
};

export default Recomendation;
