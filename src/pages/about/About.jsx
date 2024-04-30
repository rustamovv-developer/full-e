import React from "react";
import { Link } from "react-router-dom";
import headerImg from "../../assets/images/about-header.png";
import img1 from "../../assets/images/about-1.png";
import img2 from "../../assets/images/about-2.png";
import img3 from "../../assets/images/about-3.png";
import img4 from "../../assets/images/about-4.png";
import human1 from "../../assets/images/about-human-1.png";
import human2 from "../../assets/images/about-human-2.png";
import human3 from "../../assets/images/about-human-3.png";
import Bottom from "../../components/bottom/Bottom";
import "../../sass/about.scss";

const About = () => {
  return (
    <section className="about">
      <div className="container">
        <div className="about__links">
          <Link className="about__link" to={"/"}>
            Home
          </Link>
          <p className="about__links__text">/</p>
          <Link className="about__link" to={""}>
            About
          </Link>
        </div>
        <div className="about__header">
          <div className="about__header__left">
            <h2 className="about__header__title">Our Story</h2>
            <p className="about__header__text">
              Launced in 2015, Exclusive is South Asia’s premier online shopping
              makterplace with an active presense in Bangladesh. Supported by
              wide range of tailored marketing, data and service solutions,
              Exclusive has 10,500 sallers and 300 brands and serves 3 millioons
              customers across the region. <br /> <br />
              Exclusive has more than 1 Million products to offer, growing at a
              very fast. Exclusive offers a diverse assotment in categories
              ranging from consumer.
            </p>
          </div>
          <img
            src={headerImg}
            alt="header__img"
            className="about__header__img"
          />
        </div>
        <div className="about__box">
          <div className="about__card">
            <img src={img1} alt="img" className="about__box__img" />
            <h2 className="about__box__title">10.5k </h2>
            <p className="abouut__box__text">Sallers active our site</p>
          </div>
          <div className="about__card">
            <img src={img2} alt="img" className="about__box__img" />
            <h2 className="about__box__title">33k </h2>
            <p className="abouut__box__text">Mopnthly Produduct Sale</p>
          </div>
          <div className="about__card">
            <img src={img3} alt="img" className="about__box__img" />
            <h2 className="about__box__title">45.5k </h2>
            <p className="abouut__box__text">Customer active in our site</p>
          </div>
          <div className="about__card">
            <img src={img4} alt="img" className="about__box__img" />
            <h2 className="about__box__title">25k </h2>
            <p className="abouut__box__text">Anual gross sale in our site</p>
          </div>
        </div>
        <div className="about__humans">
          <div className="about__human">
            <img src={human1} alt="humans" className="about__humans__img" />
            <h2 className="about__humans__title">Tom Cruise</h2>
            <p className="about__humans__text">Founder & Chairman</p>
            <div className="about__humans__card"></div>
          </div>
          <div className="about__human">
            <img src={human2} alt="humans" className="about__humans__img" />
            <h2 className="about__humans__title">Emma Watson</h2>
            <p className="about__humans__text">Managing Director</p>
            <div className="about__humans__card"></div>
          </div>
          <div className="about__human">
            <img src={human3} alt="humans" className="about__humans__img" />
            <h2 className="about__humans__title">Will Smith</h2>
            <p className="about__humans__text">Product Designer</p>
            <div className="about__humans__card"></div>
          </div>
        </div>
        <Bottom />
      </div>
    </section>
  );
};

export default About;
