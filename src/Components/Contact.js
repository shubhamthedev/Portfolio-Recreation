import React, { Component } from "react";
class Contact extends Component {
  render() {
    return (
      <section className="contact" id="contact">
        <h5 className="heading-5 sec-color mb-s">contact &mdash;</h5>
        <h2 className="heading-2">
          look who’s here{" "}
          <span aria-label="smiling emoji" role="img">
            😁
          </span>
        </h2>
        <div className="contact-box__wrapper">
          <div className="contact-box">
            <h5 className="heading-5 sec-color mb-s">
              email{" "}
              <span aria-label="email address" role="img">
                📧
              </span>
            </h5>
            <a
              href="mailto:adeolaonigegeara@gmail.com"
              target="_blank"
              rel="nofollow noopener noreferrer"
            >
              adeolaonigegeara@gmail.com
            </a>
          </div>
          <div className="contact-box">
            <h5 className="heading-5 sec-color mb-s">
              phone{" "}
              <span aria-label="contact location nigeria" role="img">
                🇳🇬
              </span>
            </h5>
            <a href="tel:+2349066383763">+(234) 906 638 3763</a>
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;
