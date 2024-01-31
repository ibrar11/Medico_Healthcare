import React from "react";

const Container = ({ children }) => {
  return <div className={`mx-auto max-w-container px-5`}>{children}</div>;
};

export default Container;
