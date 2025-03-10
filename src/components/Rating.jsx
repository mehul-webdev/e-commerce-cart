import { Star, StarHalf } from "lucide-react";
import React from "react";

const Rating = ({ rate = 0 }) => {
  const decimalPart = rate % 1;
  const startsCount = new Array(Math.floor(rate)).fill(1);

  return (
    <div className="flex gap-2">
      {startsCount.map((star, index) => {
        return <Star fill="#1D3461" key={index} />;
      })}
      {decimalPart !== 0 && <StarHalf fill="#1D3461" />}
    </div>
  );
};

export default Rating;
