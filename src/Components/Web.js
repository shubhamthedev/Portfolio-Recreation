import React, { Component } from "react";
import Github from "../assets/github-web.svg";
import Dribbble from "../assets/dribbble.svg";
import Behance from "../assets/behance-web.svg";
import CodePen from "../assets/codepen.svg";
import Pinterest from "../assets/pinterest.svg";
import LinkedIn from "../assets/linkedin.svg";
import Instagram from "../assets/instagram.svg";
import Twitter from "../assets/twitter.svg";

class Web extends Component {
  render() {
    return (
      <section className="web">
        <h5 className="heading-5 sec-color mb-s">More of my works &mdash;</h5>
        <h2 className="heading-2">
          On the Web{" "}
          <span aria-label="world wide web" role="img">
            🌐
          </span>
        </h2>
        <div className="web-box__wrapper">
          <div className="web-box">
            <a
              href="https://github.com/adeolaadeoti"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Github} alt="github" />
              github
            </a>
          </div>
          <div className="web-box">
            <a
              href="https://dribbble.com/adeolaadeoti"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Dribbble} alt="dribbble" />
              dribbble
            </a>
          </div>
          <div className="web-box">
            <a
              href="https://www.linkedin.com/in/adeoladev/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={LinkedIn} alt="linkedin" />
              linkedin
            </a>
          </div>
          <div className="web-box">
            <a
              href="https://codepen.io/Adeoladev"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={CodePen} alt="codepen" />
              codepen
            </a>
          </div>
          <div className="web-box">
            <a
              href="https://www.pinterest.com/adeotiadeola/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Pinterest} alt="pinterest" />
              pinterest
            </a>
          </div>
          <div className="web-box">
            <a
              href="https://www.instagram.com/adeolaadeoti_/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Instagram} alt="instagram" />
              instagram
            </a>
          </div>
          <div className="web-box">
            <a
              href="https://www.behance.net/adeolaonig2191"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Behance} alt="behance" />
              behance
            </a>
          </div>
          <div className="web-box">
            <a
              href="https://twitter.com/adeolajs"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Twitter} alt="twitter" />
              twitter
            </a>
          </div>
        </div>
      </section>
    );
  }
}
export default Web;
