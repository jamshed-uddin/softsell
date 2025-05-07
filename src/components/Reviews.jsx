import React from "react";
import { reviews } from "../../public/data.json";
const Reviews = () => {
  return (
    <div>
      <div>
        {reviews.map((item, idx) => (
          <div key={idx}>
            <p>{item.review}</p>

            <div>
              <h2>{item.name}</h2>
              <h3>{item.role}</h3>
              <h3>{item.company}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
