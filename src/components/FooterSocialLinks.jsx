import React from "react";

const FooterSocialLinks = ({ src = "", alt = "" }) => {
  return (
    <div>
      <img src={src} alt={alt} />
    </div>
  );
};

export default FooterSocialLinks;
