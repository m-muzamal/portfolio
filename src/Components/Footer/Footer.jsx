import React from "react";
import "./footer.scss";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <h2>Copyright © 2023. All rights are reserved.</h2>
        <div className="icon">
          <a
            href="https://www.linkedin.com/in/muhammad-muzammal-a9ba60201/"
            target="_blank"
          >
            <FaLinkedin />
          </a>
          <a href="https://www.instagram.com/mzml_0/" target="_blank">
            <FaInstagram />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
