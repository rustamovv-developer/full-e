import React from "react";
import "../../sass/arrival.scss";

const Arrival = () => {
  return (
    <section className="arrival">
      <div className="container">
        <div className="sel__top">
          <div className="sel__left">
            <div className="sel__exam">
              <div className="sel__div"></div>
              <h3 className="sel__h3">Featured</h3>
            </div>
            <h2 className="sel__title">New Arrival</h2>
          </div>
        </div>
        <div className="arrival__info">
          <div className="arrival__left">
            <h2 className="arrival__title">PlayStation 5</h2>
            <p className="arrival__text">
              Black and White version of the PS5 coming out on sale.
            </p>
            <a className="arrival__link" href="#">
              Shop Now
            </a>
          </div>
          <div className="arrival__right">
            <div className="arrival__top">
              <h2 className="arrival__title">Women’s Collections</h2>
              <p className="arrival__text">
                Featured woman collections that give you another vibe.
              </p>
              <a className="arrival__link" href="#">
                Shop Now
              </a>
            </div>
            <div className="arrival__bottom">
              <div className="arrival__card">
                <h2 className="arrival__title">Speakers</h2>
                <p className="arrival__text">Amazon wireless speakers</p>
                <a className="arrival__link" href="#">
                  Shop Now
                </a>
              </div>
              <div className="arrival__card">
                <h2 className="arrival__title">Perfume</h2>
                <p className="arrival__text">GUCCI INTENSE OUD EDP</p>
                <a className="arrival__link" href="#">
                  Shop Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Arrival;
