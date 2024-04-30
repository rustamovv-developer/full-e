import React from "react";
import img from "../../assets/images/strelka.png";
import SellingProducts from "../sellingProducts/SellingProducts";
import "../../sass/today.scss";

const Today = () => {
  let day = new Date().getDate();
  let hours = new Date().getHours();
  let minutes = new Date().getMinutes();
  let seconds = new Date().getSeconds();
  return (
    <section className="today">
      <div className="container">
        <div className="today__info">
          <div className="today__left">
            <div className="sel__left">
              <div className="sel__exam">
                <div className="sel__div"></div>
                <h3 className="sel__h3">Today’s</h3>
              </div>
              <h2 className="sel__title">Flash Sales</h2>
            </div>
            <div className="today__box">
              <div className="today__day">
                <h3 className="today__h3">Days</h3>
                <h2 className="today__title">{day}</h2>
              </div>
              <h4 className="today__h4">:</h4>
              <div className="today__day">
                <h3 className="today__h3">Hours</h3>
                <h2 className="today__title">{hours}</h2>
              </div>
              <h4 className="today__h4">:</h4>
              <div className="today__day">
                <h3 className="today__h3">Minutes</h3>
                <h2 className="today__title">{minutes}</h2>
              </div>
              <h4 className="today__h4">:</h4>
              <div className="today__day">
                <h3 className="today__h3">Seconds</h3>
                <h2 className="today__title">{seconds}</h2>
              </div>
            </div>
          </div>
          <img src={img} alt="strelka" />
        </div>
        <div className="today__bottom">
          <SellingProducts display={"none"} />
          <SellingProducts display={"none"} />
        </div>
        <button className="today__btn">View All Products</button>
      </div>
    </section>
  );
};

export default Today;
