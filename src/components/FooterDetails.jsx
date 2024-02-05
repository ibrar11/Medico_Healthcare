import React from "react";
import { Link } from "react-router-dom";

const FooterDetails = ({ title = "", list = [] }) => {
  return (
    <div className="flex flex-col gap-y-3">
      <p className="text-base font-medium leading-normal sm:text-lg">{title}</p>
      <div className="flex flex-col gap-y-2">
        {list.map((item,index) => {
          return <Link key={index} className="text-base font-medium leading-normal sm:text-lg">{item}</Link>;
        })}
      </div>
    </div>
  );
};

export default FooterDetails;
