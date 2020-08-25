import React, { Component } from "react";
import recreate from "../assets/recreate.svg";

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <h5 className="heading-5">© 2020 Adeola Adeoti</h5>
        <img src={recreate} alt="recreate logo" />
      </footer>
    );
  }
}
export default Footer;
