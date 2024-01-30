import React from "react";

const TreatmentCard = ({
  title = "",
  image = "",
  alt = "",
  profession = "",
}) => {
  return (
    <div className={`relative sm:max-h-64 sm:max-w-80`}>
      <img className="h-full w-full rounded-lg" src={image} alt={alt} />
      <div className="absolute -bottom-9 left-10  flex flex-col items-start justify-center gap-y-1 rounded-lg bg-primary px-8 pb-4 pt-2 text-white lg:-bottom-14 lg:left-10 lg:pb-8 lg:pt-5">
        <p className="text-xs font-bold lg:text-sm">{title}</p>
        <p className="text-base font-bold lg:text-lg">{profession}</p>
      </div>
    </div>
  );
};

export default TreatmentCard;
