import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <p className="text-gray-200 text-xs text-center p-3">
        Ⓒ 2023 Bus-App Pvt Ltd. All rights reserved. Designed & developed
        by&nbsp;-&nbsp;
        <a
          href="https://www.linkedin.com/in/rishabhdaliya"
          className="hover:underline font-medium"
          target="_blank"
        >
          Rishabh Daliya
        </a>
      </p>
    </div>
  );
};

export default Footer;
