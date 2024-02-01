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
    <div className="relative flex flex-col gap-x-3 gap-y-4 overflow-hidden rounded-lg bg-white sm:p-6 lg:flex-row lg:p-7">
      <div className="min-w-7 max-w-8 lg:w-full">
        <img src={imagePath} alt={alt} />
      </div>
      <div className="flex flex-col gap-y-3">
        <h3 className="lg:text-3.5xl text-base font-bold leading-normal sm:text-lg">
          {serviceTitle}
        </h3>
        <p className="pr-20 text-base font-medium leading-normal sm:pr-14 sm:text-sm lg:text-lg">
          {serviceDescription}
        </p>
      </div>
      <Link className="h-13.5 absolute bottom-0 right-0 z-10 flex w-20 items-center justify-center bg-c-grey sm:text-xl md:text-2xl">
        <FaArrowRight />
      </Link>
    </div>
  );
};

export default ServiceCard;
