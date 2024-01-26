import React from "react";

const ListItem = ({
  icon,
  text,
  styles = "",
  textStyle = "",
  iconStyle = "",
}) => {
  return (
    <div className={`flex items-center ${styles}`}>
      <span className={`align-center flex justify-center ${iconStyle}`}>
        <img src={icon} alt="icon" className="h-fit w-fit" />
      </span>
      <p className={`ml-2 ${textStyle}`}>{text}</p>
    </div>
  );
};

export default ListItem;
