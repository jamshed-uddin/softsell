import React from "react";
import { whyChooseUs } from "../../public/data.json";
import SectionTitle from "./SectionTitle";

const WhyChooseUs = () => {
  return (
    <div>
      <SectionTitle>Why choose us</SectionTitle>
      <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-5">
        {whyChooseUs.map((item, idx) => (
          <div key={idx} className=" bg-zinc-900 rounded-xl p-4">
            <h2 className="text-xl font-semibold mb-2 ">{item.title}</h2>
            <p className="font-light leading-6">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;
