import React from "react";

const Features = ({ svgPath = "", alt = "", feature = "" }) => {
  return (
    <div className="flex gap-x-4 w-48 sm:w-56 md:w-auto">
      <img src={svgPath} alt={alt} />
      <p className="font-medium text-xs sm:text-sm md:text-xl">{feature}</p>
    </div>
  );
};

export default Features;
