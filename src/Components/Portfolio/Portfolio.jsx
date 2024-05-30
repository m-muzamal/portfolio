import React, { useEffect } from "react";
import "./portfolio.scss";
import { AiFillGithub } from "react-icons/ai";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { projects } from "../../data";

function Portfolio() {
  useEffect(() => {
    const items = document.querySelectorAll(".content");

    items.forEach((item, index) => {
      if (index % 2 !== 0) {
        item.classList.add("content_reversed");
      }
    });
  }, [projects]);

  return (
    <div id="portfolio" className="portfolio">
      <div className="container">
        <span>Portfolio</span>
        <h2>Each project is a unique piece of development 🧩</h2>
        {projects.map((item) => (
          <div key={item.id} className="content">
            <div className="right">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <div className="btns">
                {item.techStack.map((teck, index) => (
                  <div key={index} className="btn">
                    {teck}
                  </div>
                ))}
              </div>
              <div className="btns2">
                <div className="btn1">
                  <a href={item.url} target="_blank">
                    Live_Demo
                  </a>
                  <div className="icon box">
                    <BsBoxArrowUpRight />
                  </div>
                </div>
                <div className="btn1">
                  <a href={item.code} target="_blank">
                    Code
                  </a>
                  <div className="icon box">
                    <AiFillGithub />
                  </div>
                </div>
              </div>
            </div>
            <div className="left">
              <a href={item.url} target="_blank">
                <img src={item.image} alt="" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
