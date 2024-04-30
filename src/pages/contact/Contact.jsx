import React from "react";
import { Link } from "react-router-dom";
import img1 from "../../assets/images/contact-1.png";
import img2 from "../../assets/images/contact-2.png";
import "../../sass/contact.scss";

const Contact = () => {
  return (
    <section className="contact">
      <div className="container">
        <div className="about__links">
          <Link className="about__link" to={"/"}>
            Home
          </Link>
          <p className="about__links__text">/</p>
          <Link className="about__link" to={""}>
            Cantact
          </Link>
        </div>
        <div className="contact__info">
          <div className="contact__left">
            <div className="contact__card">
              <img src={img1} alt="contact__img" className="contact__img" />
              <h2 className="contact__title">Call To Us</h2>
            </div>
            <p className="contact__text">
              We are available 24/7, 7 days a week.
            </p>
            <p className="contact__text">Phone: +8801611112222</p>
            <hr className="contact__hr" />
            <div className="contact__card">
              <img src={img2} alt="contact__img" className="contact__img" />
              <h2 className="contact__title">Write To US</h2>
            </div>
            <p className="contact__text">
              Fill out our form and we will contact you within 24 hours.
            </p>
            <div className="contact__text">Emails: customer@exclusive.com</div>
            <div className="contact__text">Emails: support@exclusive.com</div>
          </div>
          <div className="contact__right">
            <div className="contact__inputs">
              <input
                type="text"
                placeholder="Your Name *"
                className="contact__input"
              />
              <input
                type="text"
                placeholder="Your Email *"
                className="contact__input"
              />
              <input
                type="text"
                placeholder="Your Phone *"
                className="contact__input"
              />
            </div>
            <textarea
              className="contact__textarea"
              placeholder="Your Massage"
              style={{ width: "100%", height: "207px" }}
            ></textarea>
            <button className="contact__btn">Send Massage</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
