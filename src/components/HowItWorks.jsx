import React from "react";
import SectionTitle from "./SectionTitle";
import { howItWorks } from "../../public/data.json";

const HowItWorks = () => {
  return (
    <div className="scroll-mt-20 " id="how-it-works">
      <SectionTitle>How it works</SectionTitle>

      <div className="flex flex-col mt-14 space-y-5 lg:space-y-10">
        {howItWorks.map((item, idx) => (
          <div
            className={`flex justify-start ${
              idx % 2 === 0
                ? "lg:justify-start lg:mr-10"
                : "lg:justify-end lg:ml-10"
            }`}
            key={idx}
          >
            <div className="lg:w-1/2  ">
              <h3 className="text-xl font-semibold ">
                <span className="italic mr-1">#</span>
                {idx + 1}
              </h3>
              <h2 className="text-2xl font-semibold">{item.title}</h2>
              <p className="font-light leading-6 text-lg mt-3">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
