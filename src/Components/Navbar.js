import React, { Component } from "react";
import gsap from "gsap";

import logoDesktop from "../assets/adeola-logo.svg";
import logoMobile from "../assets/adeola-logo-mobile.svg";
import Github from "../assets/github.svg";
import Dribbble from "../assets/dribbble.svg";
import Behance from "../assets/behance.svg";
import CodePen from "../assets/codepen.svg";
import Pinterest from "../assets/pinterest.svg";
import LinkedIn from "../assets/linkedin.svg";
import Instagram from "../assets/instagram.svg";
import Twitter from "../assets/twitter.svg";

class Navbar extends Component {
  componentDidMount() {
    const tl = gsap.timeline({ paused: true, reversed: true });
    tl.to(".box", {
      height: "100vh",
      duration: 0.5,
      transformOrigin: "bottom",
      stagger: 0.3,
    });
    tl.to(".mobile-logo", { opacity: "1" });
    tl.to(".nav-main__content", {
      opacity: "1",
      visibility: "visible",
      yPercent: -5,
      duration: 0.5,
      transformOrigin: "bottom",
      stagger: 0.3,
    });

    const navIcon = document.querySelector(".nav-icon");
    navIcon.onclick = function () {
      if (tl.reversed()) {
        this.classList.add("nav-anim");
        tl.play();
        document.body.classList.add("noScroll");
      } else {
        this.classList.remove("nav-anim");
        tl.reverse();
        document.body.classList.remove("noScroll");
      }
    };

    const allLinks = document.querySelectorAll(".list__item a");

    allLinks.forEach((link) => {
      link.addEventListener("click", () => {
        document.body.classList.remove("noScroll");
        tl.reverse();
        navIcon.classList.remove("nav-anim");
      });
    });
  }
  render() {
    return (
      <div className="nav-container">
        <div className="nav-icon">
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </div>
        <nav className="nav-main">
          <div className="box-wrapper">
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
          </div>
          <img src={logoMobile} alt="Adeola" className="mobile-logo" />
          <div className="nav-main__content">
            <div className="nav-main__content--box">
              <h4 className="heading-4">on the web</h4>
              <div className="social-links">
                <div className="social-links--box">
                  <a href="https://github.com/adeolaadeoti">
                    <img src={Github} alt="github" />
                  </a>{" "}
                  <a href="https://codepen.io/Adeoladev">
                    <img src={CodePen} alt="codepen" />
                  </a>
                  <a href="https://dribbble.com/adeolaadeoti">
                    <img src={Dribbble} alt="dribbble" />
                  </a>{" "}
                  <a href="https://www.behance.net/adeolaonig2191">
                    <img src={Behance} alt="behance" />
                  </a>
                </div>
                <div className="social-links--box">
                  <a href="https://twitter.com/adeolajs">
                    <img src={Twitter} alt="twitter" />
                  </a>{" "}
                  <a href="https://www.linkedin.com/in/adeoladev/">
                    <img src={LinkedIn} alt="linkedin" />
                  </a>
                  <a href="https://www.instagram.com/adeolaadeoti_/">
                    <img src={Instagram} alt="instagram" />
                  </a>
                  <a href="https://www.pinterest.com/adeotiadeola/">
                    <img src={Pinterest} alt="pinterest" />
                  </a>
                </div>
              </div>
              <a href="#resume" className="resume">
                Resume{" "}
                <span aria-label="resume" role="img">
                  📗
                </span>
              </a>
            </div>
            <div className="nav-main__content--box">
              <h4 className="heading-4">navigation</h4>
              <ul className="list">
                <li className="list__item">
                  <a href="#home" className="list__link">
                    Home
                  </a>
                </li>
                <li className="list__item">
                  <a href="#projects" className="list__link">
                    Projects
                  </a>
                </li>
                <li className="list__item">
                  <a href="#contact" className="list__link">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <nav className="nav-sub">
          <picture>
            <source media="(max-width:37.5em)" srcSet={logoDesktop} />
            <img src={logoDesktop} alt="adeola logo" />
          </picture>
        </nav>
      </div>
    );
  }
}
export default Navbar;
