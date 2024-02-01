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
      <div className="px-7.5 lg:pb-7.5 absolute -bottom-12  left-10 flex flex-col items-start justify-center gap-y-1 rounded-lg bg-primary pb-5 pt-3 text-white sm:-bottom-9 lg:-bottom-14 lg:left-10 lg:pt-5">
        <p className="text-xs font-bold lg:text-sm">{title}</p>
        <p className="text-lg font-bold lg:text-2xl">{profession}</p>
      </div>
    </div>
  );
};

export default TreatmentCard;
