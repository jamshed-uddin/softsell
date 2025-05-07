import React from "react";
import { reviews } from "../../public/data.json";
import SectionTitle from "./SectionTitle";
const Reviews = () => {
  return (
    <div>
      <SectionTitle>Real results</SectionTitle>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-10">
        {reviews.map((item, idx) => (
          <div key={idx} className="bg-zinc-900 rounded-xl p-4">
            <p className=" text-xl leading-7">{item.review}</p>

            <div className="mt-5">
              <h2>{item.name}</h2>
              <h3>
                {item.role} @ {item.company}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
