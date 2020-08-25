import React, { Component } from "react";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import Projects from "./Components/Projects";
import Web from "./Components/Web";
import "./sass/main.scss";
import Footer from "./Components/Footer";
import Contact from "./Components/Contact";
class App extends Component {
  // componentDidMount() {
  //   var e = document.body,
  //     t = document.getElementsByClassName("smooth-scroll-wrapper")[0],
  //     n = t.getBoundingClientRect().height - "100px",
  //     a = 0.08,
  //     o = 0;

  //   function r() {
  //     let e = `translateY(-${(o +=
  //       (window.pageYOffset - o) * a)}px) translateZ(0)`;
  //     t.style.transform = e;
  //     requestAnimationFrame(r);
  //   }
  //   e.style.height = Math.floor(n) + "px";
  //   r();
  //   var s = document.querySelector("section"),
  //     l = window.pageYOffset,
  //     i = function e() {
  //       var t = window.pageYOffset,
  //         n = 0.2 * (t - l);
  //       s.style.transform = "skewY(" + n + "deg)";
  //       l = t;
  //       requestAnimationFrame(e);
  //     };
  //   i();
  // }
  render() {
    return (
      <>
        <Navbar />
        <div className="smooth-scroll-wrapper">
          <section className="content">
            <Header />
            <main>
              <Projects />
              <Web />
              <Contact />
            </main>
            <Footer />
          </section>
        </div>
      </>
    );
  }
}

export default App;
