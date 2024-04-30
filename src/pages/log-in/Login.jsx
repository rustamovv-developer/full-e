import React from "react";
import img from "../../assets/images/sign-ing.png";
import "../../sass/login.scss";

const Login = () => {
  return (
    <section className="login">
      <div className="up__info">
        <img src={img} alt="up-img" className="up__img" />
        <div className="up__right">
          <h2 className="up__title">Log in to Exclusive</h2>
          <h3 className="up__h3">Enter your details below</h3>
          <input
            type="text"
            placeholder="Email or Phone Number"
            className="up__input"
          />
          <input type="password" placeholder="Password" className="up__input" />
          <div className="login__card">
            <button className="login__btn">Log In</button>
            <p className="login__text">Forget Password?</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
