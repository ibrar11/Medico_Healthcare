import React from "react";

const ListItem = ({
  icon,
  text,
  styles = "",
  textStyle = "",
  textSize = "text-base",
  iconStyle = "",
  alt = ""
}) => {
  return (
    <div className={`flex items-center ${styles}`}>
      <span className={`flex justify-center ${iconStyle}`}>
        <img src={icon} alt={alt} className="h-fit w-fit" />
      </span>
      <p className={`ml-2 ${textSize} ${textStyle}`}>{text}</p>
    </div>
  );
};

export default ListItem;
