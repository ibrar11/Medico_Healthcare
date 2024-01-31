import React from "react";

const Features = ({ svgPath = "", alt = "", feature = "" }) => {
  return (
    <div className="flex sm:gap-x-4">
      <img src={svgPath} alt={alt} />
      <p className="text-base font-medium leading-normal sm:text-lg md:text-xl">
        {feature}
      </p>
    </div>
  );
};

export default Features;
