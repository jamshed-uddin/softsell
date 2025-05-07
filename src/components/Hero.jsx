import React from "react";
import Button from "./Button";

const Hero = () => {
  return (
    <div className="flex flex-col justify-center h-screen items-center mb-0">
      <div className="lg:w-3/4 mx-auto text-center space-y-4">
        <h1 className="text-4xl font-bold">
          Recover Value from Idle Software Assets
        </h1>
        <p className="text-xl">
          SoftSell enables organizations to liquidate unused software quickly
          and safely. Get a free valuation today and see what your licenses are
          worth
        </p>

        <Button>Sell my lisences</Button>
      </div>
    </div>
  );
};

export default Hero;
