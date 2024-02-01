import React from "react";

const Features = ({ svgPath = "", alt = "", feature = "", textStyle = "" }) => {
  return (
    <div className="flex items-center gap-x-2 sm:gap-x-4 ">
      <img src={svgPath} alt={alt} />
      <p
        className={`text-base font-medium leading-normal xl:text-lg ${textStyle}`}
      >
        {feature}
      </p>
    </div>
  );
};

export default Features;
