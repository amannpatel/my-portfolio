import React from "react";
import heroImg from "../../assets/images/hero.svg";
// import CountUp from "react-countup/build/CountUp";

const Hero = () => {
  return (
    <section className="pt-0" id="about">
      <div className="container pt-14">
        <div className="md:flex items-center justify-between sm:flex-col md:flex-row">
          {/* Hero left content */}
          <div className="w-full md:basis-1/2">
            <h5
              data-aos="fade-right"
              data-aos-duration="1500"
              className="text-headingColor font-[600] text-[16px]"
            >
              Hello Welcome
            </h5>
          </div>
          {/* Hero left content ends */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
