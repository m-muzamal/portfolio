import React from "react";
import "./portfolio.scss";
import { AiFillGithub } from "react-icons/ai";
import { BsBoxArrowUpRight } from "react-icons/bs";
import web1 from "../../assets/web1.jpg";
import web2 from "../../assets/web2.jpg";
import web3 from "../../assets/web3.jpeg";
import web4 from "../../assets/web4.jpg";

function Portfolio() {
  return (
    <div id="portfolio" className="portfolio">
      <div className="container">
        <span>Portfolio</span>
        <h2>Each project is a unique piece of development 🧩</h2>
        <div className="content">
          <div className="left">
            <a href="https://car-rantel.netlify.app/" target="_blank">
              <img src={web1} alt="" />
            </a>
          </div>
          <div className="right">
            <h3>CAR RENTAL (FEBRUARY 2023) 🚗</h3>
            <p>
              A car rental website is an online platform that allows users to
              rent cars for personal or business use. The website provides an
              interface for searching, comparing, and reserving cars.
            </p>
            <div className="btns">
              <div className="btn">React</div>
              <div className="btn">SCSS</div>
            </div>
            <div className="btns2">
              <div className="btn1">
                <a
                  href="https://github.com/m-muzamal/car-rantel"
                  target="_blank"
                >
                  Code
                </a>
                <div className="icon">
                  <AiFillGithub />
                </div>
              </div>
              <div className="btn1">
                <a href="https://car-rantel.netlify.app/" target="_blank">
                  Live_Demo
                </a>
                <div className="icon box">
                  <BsBoxArrowUpRight />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content">
          <div className="left">
            <a href="">
              <img src={web2} alt="" />
            </a>
          </div>
          <div className="right">
            <h3>Bus Reservation System 🚌</h3>
            <p>
              A bus reservation system is an online platform for booking bus
              tickets, making travel arrangements easier by allowing users to
              select seats, dates, and routes conveniently.
            </p>
            <div className="btns">
              <div className="btn">React</div>
              <div className="btn">CSS</div>
              <div className="btn">SQL</div>
            </div>
            <div className="btns2">
              <div className="btn1">
                <a
                  href="https://github.com/m-muzamal/buss_reservation_with_sql"
                  target="_blank"
                >
                  Code
                </a>
                <div className="icon">
                  <AiFillGithub />
                </div>
              </div>
              <div className="btn1">
                <a href="">Live_Demo</a>
                <div className="icon box">
                  <BsBoxArrowUpRight />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content">
          <div className="left">
            <a href="https://e-sale.netlify.app/" target="_blank">
              <img src={web4} alt="" />
            </a>
          </div>
          <div className="right">
            <h3>E-Store 📲</h3>
            <p>
              E-Stores make life easier by providing easy access to various
              products. It allow simple comparisons, secure payments, and home
              delivery, saving time and effort compared to traditional shopping.
            </p>
            <div className="btns">
              <div className="btn">React</div>
              <div className="btn">SCSS</div>
              <div className="btn">API</div>
            </div>
            <div className="btns2">
              <div className="btn1">
                <a href="https://github.com/m-muzamal/e-store" target="_blank">
                  Code
                </a>
                <div className="icon">
                  <AiFillGithub />
                </div>
              </div>
              <div className="btn1">
                <a href="https://e-sale.netlify.app/" target="_blank">
                  Live_Demo
                </a>
                <div className="icon box">
                  <BsBoxArrowUpRight />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content">
          <div className="left">
            <a href="https://mzml.netlify.app/" target="_blank">
              <img src={web3} alt="" />
            </a>
          </div>
          <div className="right">
            <h3>Portfolio Website 🚩</h3>
            <p>
              I am a student of BS Computer Science at University of agriculture
              Faisalabad. I always strive to learn new skills and improve where
              I am lacking. My goal is to work with an organization.
            </p>
            <div className="btns">
              <div className="btn">React</div>
              <div className="btn">CSS</div>
            </div>
            <div className="btns2">
              <div className="btn1">
                <a
                  href="https://github.com/m-muzamal/m-muzamal.github.io"
                  target="_blank"
                >
                  Code
                </a>
                <div className="icon">
                  <AiFillGithub />
                </div>
              </div>
              <div className="btn1">
                <a href="https://mzml.netlify.app/" target="_blank">
                  Live_Demo
                </a>
                <div className="icon box">
                  <BsBoxArrowUpRight />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
