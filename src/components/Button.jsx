import React from 'react'

const Button = ({ text, buttonStyle }) => {
  return <button className={`${buttonStyle}`}>{text}</button>;
};

export default Button
