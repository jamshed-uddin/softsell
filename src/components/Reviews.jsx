import React from "react";
import { reviews } from "../../public/data.json";
import SectionTitle from "./SectionTitle";
const Reviews = () => {
  return (
    <div id="reviews" className="scroll-mt-20">
      <SectionTitle>Real results</SectionTitle>

      <div className="  mt-14 space-y-4">
        {reviews.map((item, idx) => (
          <div
            className={`flex ${
              idx % 2 === 0 ? "lg:justify-start" : "lg:justify-end"
            }`}
            key={idx}
          >
            <div className={`bg-zinc-900 rounded-xl p-4 lg:w-1/2`}>
              <p className=" text-xl leading-7 ">{item.review}</p>

              <div className="mt-5">
                <h2>{item.name}</h2>
                <h3>
                  {item.role} @ {item.company}
                </h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
