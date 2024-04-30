import React from "react";
import img from "../../assets/images/sign-ing.png";
import google from "../../assets/images/google.png";
import { Link } from "react-router-dom";
import "../../sass/sign-up.scss";

const SignUp = () => {
  return (
    <section className="up">
      <div className="up__info">
        <img src={img} alt="up-img" className="up__img" />
        <div className="up__right">
          <h2 className="up__title">Create an account</h2>
          <h3 className="up__h3">Enter your details below</h3>
          <input type="text" placeholder="Name" className="up__input" />
          <input
            type="text"
            placeholder="Email or Phone Number"
            className="up__input"
          />
          <input type="password" placeholder="Password" className="up__input" />
          <button className="up__btn">Create Account</button>
          <img src={google} alt="from google" className="up__google" />
          <div className="up__card">
            <p className="up__text">Already have account?</p>
            <Link className="up__link" to={"/log-in"}>
              Log in
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
