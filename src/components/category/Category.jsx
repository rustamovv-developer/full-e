import React from "react";
import img from "../../assets/images/strelka.png";
import img1 from "../../assets/images/category-1.png";
import img2 from "../../assets/images/category-2.png";
import img3 from "../../assets/images/category-3.png";
import img4 from "../../assets/images/category-4.png";
import img5 from "../../assets/images/category-5.png";
import img6 from "../../assets/images/category-6.png";
import "../../sass/category.scss";

const Category = () => {
  return (
    <section className="cateory">
      <div className="container">
        <div className="sel__top">
          <div className="sel__left">
            <div className="sel__exam">
              <div className="sel__div"></div>
              <h3 className="sel__h3">Categories</h3>
            </div>
            <h2 className="sel__title">Browse By Category</h2>
          </div>
          <img src={img} alt="strelka" />
        </div>
        <div className="category__info">
          <div className="category__card">
            <img src={img1} alt="img" className="category__img" />
            <h2 className="category__title">Phones</h2>
          </div>
          <div className="category__card">
            <img src={img2} alt="img" className="category__img" />
            <h2 className="category__title">Computers</h2>
          </div>
          <div className="category__card">
            <img src={img3} alt="img" className="category__img" />
            <h2 className="category__title">SmartWatch</h2>
          </div>
          <div className="category__card">
            <img src={img4} alt="img" className="category__img" />
            <h2 className="category__title">Camera</h2>
          </div>
          <div className="category__card">
            <img src={img5} alt="img" className="category__img" />
            <h2 className="category__title">HeadPhones</h2>
          </div>
          <div className="category__card">
            <img src={img6} alt="img" className="category__img" />
            <h2 className="category__title">Gaming</h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Category;
