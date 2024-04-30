import React from "react";
import "../../sass/account.scss";
import { Link } from "react-router-dom";

const Account = () => {
  return (
    <section className="account">
      <div className="container">
        <div className="about__links">
          <Link className="about__link" to={"/"}>
            Home
          </Link>
          <p className="about__links__text">/</p>
          <Link className="about__link" to={""}>
            My Account
          </Link>
        </div>
        <div className="account__info">
          <div className="account__left">
            <h3 className="account__h3">Manage My Account</h3>
            <p className="account__text account__red">My Profile</p>
            <p className="account__text">Address Book</p>
            <p className="account__text">My Payment Options</p>
            <h3 className="account__h3">My Orders</h3>
            <p className="account__text">My Returns</p>
            <p className="account__text">My Cancellations</p>
            <h3 className="account__h3">My WishList</h3>
          </div>
          <div className="account__center">
            <h2 className="account__title">Edit Your Profile</h2>
            <h3 className="account__h3">First Name</h3>
            <p className="account__text">Md</p>
            <h3 className="account__h3">Email</h3>
            <p className="account__text">rimel1111@gmail.com</p>
            <h3 className="account__h3">Password Changes</h3>
            <p className="account__text">Current Passwod</p>
            <p className="account__text">New Passwod</p>
            <p className="account__text">Confirm New Passwod</p>
          </div>
          <div className="account__right">
            <h3 className="account__h3">Last Name</h3>
            <p className="account__text">Rimel</p>
            <h3 className="account__h3">Address</h3>
            <p className="account__text">Kingston, 5236, United State</p>
          </div>
        </div>
        <div className="account__bottom">
          <h4 className="account__h4">Cancel</h4>
          <button className="account__btn">Save Changes</button>
        </div>
      </div>
    </section>
  );
};

export default Account;
