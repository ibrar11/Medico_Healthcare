import React from "react";

const Features = ({ svgPath = "", alt = "", feature = "" }) => {
  return (
    <div className="flex gap-x-4">
      <img src={svgPath} alt={alt} />
      <p className="text-xs font-medium sm:text-sm md:text-xl">{feature}</p>
    </div>
  );
};

export default Features;
