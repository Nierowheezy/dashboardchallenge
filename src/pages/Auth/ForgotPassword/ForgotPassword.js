import React from "react";
import { Link } from "react-router-dom";
import bg from "../../../assets/bg.png";
import capslock from "../../../assets/capslock.png";
import logo from "../../../assets/logo.png";
import "./ForgotPassword.css";

const ForgotPassword = () => {
  return (
    <>
      <div className="forgot__logo">
        <img src={logo} alt="" />
      </div>
      <div className="forgot__left__content">
        <h4 style={{ color: "#18B2D2" }}>OUR SOLUTION</h4>
        <p style={{ marginTop: "20px" }}>
          Our solution provides low-cost, carbon-free on demand power for
          households and small business across Nigeria.{" "}
        </p>

        <div className="forgot__left__content__span">
          <span className="forgot__left__content__border"></span>
          <span className="forgot__left__content__border_next"></span>
          <span className="forgot__left__content__border_next"></span>
        </div>
      </div>
      <div className="forgot__left__footer">
        <Link to="/privacy">
          <span>Privacy Policy</span>
        </Link>
        <Link to="/terms-condition">
          <span>Terms & Conditions</span>
        </Link>
        <Link to="/faqs">
          <span>Faqs</span>
        </Link>
      </div>
      <div className="forgot__form__overall">
        <div className="bg-image">
          <img src={bg} alt="" style={{ width: "520px" }} />
        </div>
        <div className="forgot__form">
          <form className="forgot__form_container">
            <div className="forgot__container">
              <div className="forgot__header__main">
                <img src={capslock} alt="" />
                <div className="forgot__header__text">
                  <p style={{ fontSize: "15px", fontWeight: "bold" }}>
                    Login to your account
                  </p>
                  <p style={{ fontSize: "15px" }}>
                    Login with your email and password
                  </p>
                </div>
              </div>
              <div className="inset">
                <p>
                  <label for="email" style={{ fontSize: "14px" }}>
                    Email
                  </label>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    placeholder="Enter your email address"
                  />
                </p>
              </div>
              <p className="forgot__button">
                <input type="submit" name="go" id="go" value="Reset Password" />
                <i className="feather icon-arrow-right forgot__arrow__style"></i>
              </p>

              <p>
                <div className="forgot__pass__create">
                  <span for="password" style={{ fontSize: "14px" }}>
                    Already have an account ?
                  </span>
                  <Link to="/login">
                    <span
                      style={{
                        color: "#1EB2A6",
                        marginLeft: "2px",
                        cursor: "pointer",
                        fontSize: "14px",
                      }}
                    >
                      Login
                    </span>
                  </Link>
                </div>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
