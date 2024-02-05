import React from "react";

const FooterSocialLinks = ({ src = "", alt = "" }) => {
  return (
    <div className="flex items-center  justify-center">
      <img src={src} alt={alt} />
    </div>
  );
};

export default FooterSocialLinks;
