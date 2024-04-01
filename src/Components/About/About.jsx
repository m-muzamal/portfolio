import React from "react";
import "./about.scss";
import about from "../../assets/about.jpg";
import icon from "../../assets/about-icon.png";

function About() {
  return (
    <div id="about" className="about">
      <div className="container">
        <div className="left">
          <div className="image">
            <img src={about} alt="" />
          </div>
          <div className="circle">
            <p>Front-End Web Developer</p>
            <img src={icon} alt="" />
          </div>
        </div>
        <div className="right">
          <span>About Me</span>
          <h2>
            A dedicated Front-end Developer based in Toba Tek Singh, Pakistan 📍
          </h2>
          <p>
            As a Front-End Developer, I possess an impressive arsenal of skills
            in HTML, CSS, JavaScript, React, Tailwind, and SASS. I excel in
            designing and maintaining responsive websites that offer a smooth
            user experience. My expertise lies in crafting dynamic, engaging
            interfaces through writing clean and optimized code and utilizing
            cutting-edge development tools and techniques. I want to join a team
            who thrives in collaborating with cross-functional teams to produce
            outstanding web applications.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
