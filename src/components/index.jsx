import React from "react";

export const Container = ({ children }) => {
  return <div className={`max-w-container mx-auto px-5`}>{children}</div>;
};

export const ListItem = ({ icon, text, styles = "", textStyle = "" }) => {
  return (
    <div className={`flex items-center ${styles}`}>
      <span className="align-center flex justify-center">
        <img src={icon} alt="icon" className="h-fit w-fit" />
      </span>
      <p className={`ml-2 text-base sm:text-lg ${textStyle}`}>{text}</p>
    </div>
  );
};

export const Button = ({ text, buttonStyle }) => {
  return <button className={`${buttonStyle}`}>{text}</button>;
};
