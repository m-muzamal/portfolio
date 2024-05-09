import React from "react";
import "./contact.scss";
import { GrMapLocation } from "react-icons/gr";
import { AiOutlineMail } from "react-icons/ai";

function Contact() {
  return (
    <div id="contact" className="contact">
      <div className="container">
        <span>Contact</span>
        <h2>Don't be shy! Hit me up! 👇</h2>
        <div className="items">
          <div className="item">
            <div className="icon">
              <GrMapLocation />
            </div>
            <div className="text">
              <h3>Location</h3>
              <p>Toba Tek Singh, Pakistan</p>
            </div>
          </div>
          <div className="item">
            <div className="icon">
              <AiOutlineMail />
            </div>
            <div className="text">
              <h3>Email</h3>
              <a
                href="mailto:muzamal503@gmail.com"
                target="_blank"
                className="email"
              >
                muzamal503@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
