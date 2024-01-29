import React from "react";

const Button = ({ text, buttonStyle }) => {
  return (
    <button
      className={`rounded-lg bg-primary p-3 text-base font-bold text-white ${buttonStyle}`}
    >
      {text}
    </button>
  );
};

export default Button;
