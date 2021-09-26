import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import bg from "../../../assets/bg.png";
import capslock from "../../../assets/capslock.png";
import logo from "../../../assets/logo.png";
import { registerUser } from "../../../redux/actions/authActions";
import "./Register.css";

const Register = (props) => {
  const { registerUser, auth, loading } = props;

  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    phoneNumber: "",
    password: "",
    password2: "",
    errors: {},
  });

  useEffect(() => {
    if (auth.isAuthenticated) {
      props.history.push("/login");
    }
    // eslint-disable-next-line
  }, []);

  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const newUser = {
      name: formData.name,
      email: formData.email,
      password: formData.password,
      password2: formData.password2,
    };

    // console.log(newUser);

    registerUser(newUser, props.history);
  };

  useEffect(() => {
    setFormData({
      ...formData,
      errors: props.errors,
    });
    // eslint-disable-next-line
  }, [props.errors]);

  const { errors } = formData;

  return (
    <>
      <div className="register__logo">
        <img src={logo} alt="" />
      </div>
      <div className="register__left__content">
        <h4 style={{ color: "#18B2D2" }}>OUR SOLUTION</h4>
        <p style={{ marginTop: "20px" }}>
          Our solution provides low-cost, carbon-free on demand power for
          households and small business across Nigeria.{" "}
        </p>

        <div className="register__left__content__span">
          <span className="register__left__content__border"></span>
          <span className="register__left__content__border_next"></span>
          <span className="register__left__content__border_next"></span>
        </div>
      </div>
      <div className="register__left__footer">
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
      <div className="register__form__overall">
        <div className="bg-image">
          <img src={bg} alt="" style={{ width: "520px" }} />
        </div>
        <div className="register__form">
          <form onSubmit={onSubmit}>
            <div className="register__container">
              <div className="register__header__main">
                <img src={capslock} alt="" />
                <div className="register__header__text">
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
                  <input
                    type="text"
                    name="fullname"
                    value={formData.fullname}
                    onChange={onChange}
                    id="fullname"
                    placeholder="Full Name"
                  />
                </p>
                <p>
                  <input
                    type="text"
                    name="email"
                    value={formData.email}
                    onChange={onChange}
                    id="email"
                    placeholder="Email"
                  />
                </p>
                <p>
                  <input
                    type="text"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={onChange}
                    id="phoneNumber"
                    placeholder="Phone Number"
                  />
                </p>
                <p>
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={onChange}
                    id="password"
                    placeholder="Password"
                  />
                </p>
                <p>
                  <input
                    type="password"
                    name="password2"
                    value={formData.password2}
                    onChange={onChange}
                    id="password"
                    placeholder="Confirm password"
                  />
                </p>
              </div>
              <p className="register__button">
                <input type="submit" name="go" id="go" value="Create account" />
                <i className="feather icon-arrow-right register__arrow__style"></i>
              </p>

              <p>
                <div className="register__pass__create">
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

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
  loading: state.auth.loading,
});

export default connect(mapStateToProps, { registerUser })(withRouter(Register));
