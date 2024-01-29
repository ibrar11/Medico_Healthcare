import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";

const ServiceCard = ({
  serviceTitle = "",
  serviceDescription = "",
  imagePath = "",
  alt = "",
}) => {
  return (
    <div className="relative flex gap-x-5 sm:p-6 md:p-7">
      <div className="w-36">
        <img src={imagePath} alt={alt} />
      </div>
      <div className="flex flex-col gap-y-3">
        <h3 className="text-base font-bold sm:text-lg lg:text-2xl">
          {serviceTitle}
        </h3>
        <p className="text-xs font-medium sm:text-sm lg:text-lg">
          {serviceDescription}
        </p>
      </div>
      <Link className="absolute -bottom-8 right-0 z-10 flex h-7 w-10 items-center justify-center bg-c-grey sm:-right-6 sm:-bottom-0 sm:h-10 sm:w-16 sm:text-xl md:-bottom-8 md:h-14 md:w-20 md:text-2xl">
        <FaArrowRight />
      </Link>
    </div>
  );
};

export default ServiceCard;
