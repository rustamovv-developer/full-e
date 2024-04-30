import React from "react";
import "../../sass/error.scss";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <section className="error">
      <div className="container">
        <div className="about__links">
          <Link className="about__link" to={"/"}>
            Home
          </Link>
          <p className="about__links__text">/</p>
          <Link className="about__link" to={""}>
            404 Error
          </Link>
        </div>
        <div className="error__info">
          <h2 className="error__title">404 Not Found</h2>
          <p className="error__text">
            Your visited page not found. You may go home page.
          </p>
          <Link to={"/"} className="error__btn">
            Back to home page
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Error;
