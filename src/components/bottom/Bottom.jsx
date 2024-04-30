import React from "react";
import img1 from "../../assets/images/bottom-1.png";
import img2 from "../../assets/images/bottom-2.png";
import img3 from "../../assets/images/bottom-3.png";
import "../../sass/bottom.scss";

const Bottom = () => {
  return (
    <section className="bottom">
      <div className="container">
        <div className="bottom__info">
          <div className="bottom__card">
            <img src={img1} alt="img" className="bottom__img" />
            <h2 className="bottom__title">FREE AND FAST DELIVERY</h2>
            <p className="bottom__text">
              Free delivery for all orders over $140
            </p>
          </div>
          <div className="bottom__card">
            <img src={img2} alt="img" className="bottom__img" />
            <h2 className="bottom__title">24/7 CUSTOMER SERVICE</h2>
            <p className="bottom__text">Friendly 24/7 customer support</p>
          </div>
          <div className="bottom__card">
            <img src={img3} alt="img" className="bottom__img" />
            <h2 className="bottom__title">MONEY BACK GUARANTEE</h2>
            <p className="bottom__text">We reurn money within 30 days</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bottom;
