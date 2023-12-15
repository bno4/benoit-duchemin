import React from "react";
import Social from "./Social";

const Footer = () => {
  return (
    <div className="footer--pin">
      <p>© Benoît Duchemin - 2023</p>
      <div className="contact-infos">
        <p>
          <i className="fa-solid fa-phone"></i> +33 (0)6 30 53 32 89
        </p>
        <p>
          <i className="fa-solid fa-envelope"></i> bnduchemin@gmail.com
        </p>
        <p>
          <i className="fa-solid fa-location-dot"></i> Lyon
        </p>
      </div>
      <Social />
    </div>
  );
};

export default Footer;
