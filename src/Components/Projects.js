import React, { Component } from "react";
import GitHub from "../assets/github.svg";
import link from "../assets/link.svg";
import behance from "../assets/behance.svg";
class Projects extends Component {
  render() {
    return (
      <section className="project" id="projects">
        <h5 className="heading-5 sec-color mb-5">Featured Projects &mdash;</h5>
        <h2 className="heading-2">
          Stuff I’ve worked on{" "}
          <span aria-label="projects" role="img">
            📁
          </span>
        </h2>
        <div className="project-box__wrapper">
          <div className="project-box">
            <div className="project-box__link">
              <a
                href="https://github.com/adeolaadeoti/raba-exchange-rate"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={GitHub} alt="github logo" />
              </a>
              <a
                href="https://raba.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={link} alt="link icon" />
              </a>
            </div>
            <div className="project-box__content">
              <h3 className="heading-3 mb-l">
                raba
                <br />
                exchange.
              </h3>
              <h5 className="heading-5">API &nbsp; HTML/SCSS &nbsp; JS</h5>
            </div>
          </div>
          <div className="project-box">
            <div className="project-box__link">
              <a
                href="https://github.com/adeolaadeoti/safarika"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={GitHub} alt="github logo" />
              </a>
              <a
                href="https://safarika.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={link} alt="link icon" />
              </a>
            </div>
            <div className="project-box__content">
              <h3 className="heading-3 mb-l">
                Safarika
                <br />
                Adventure.
              </h3>
              <h5 className="heading-5">API &nbsp; HTML/SCSS &nbsp; JS</h5>
            </div>
          </div>
          <div className="project-box">
            <div className="project-box__link">
              <a
                href="https://github.com/adeolaadeoti/gudfood-restaurant"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={GitHub} alt="github logo" />
              </a>
              <a
                href="https://gudfood.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={link} alt="link icon" />
              </a>
            </div>
            <div className="project-box__content">
              <h3 className="heading-3 mb-l">
                Gudfood
                <br />
                Restaurant.
              </h3>
              <h5 className="heading-5">HTML/SCSS &nbsp; JS</h5>
            </div>
          </div>
          <div className="project-box">
            <div className="project-box__link">
              <a
                href="https://www.behance.net/gallery/99359631/LogoFolio"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={behance} alt="behance logo" />
              </a>
            </div>
            <div className="project-box__content">
              <h3 className="heading-3 mb-l">
                logo
                <br />
                Portfolio.
              </h3>
              <h5 className="heading-5">ai &nbsp; ps</h5>
            </div>
          </div>
          <div className="project-box">
            <div className="project-box__link">
              <a
                href="https://www.behance.net/gallery/99004155/Umeh-Group-Brand-Identity"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={behance} alt="behance logo" />
              </a>
            </div>
            <div className="project-box__content">
              <h3 className="heading-3 mb-l">
                umeh
                <br />
                Brand Identity.
              </h3>
              <h5 className="heading-5">ai &nbsp; ps</h5>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default Projects;
