import React from "react";

const ListItem = ({ icon, text, styles = "", textStyle = "" }) => {
  return (
    <div className={`flex max-w-60 items-center ${styles}`}>
      <span className="align-center flex max-h-8 max-w-8 justify-center">
        <img src={icon} alt="icon" className="h-fit w-fit" />
      </span>
      <p className={`ml-2 text-base  sm:text-lg ${textStyle}`}>{text}</p>
    </div>
  );
};

export default ListItem;
