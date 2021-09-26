import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import bg from "../../../assets/bg.png";
import capslock from "../../../assets/capslock.png";
import logo from "../../../assets/logo.png";
import Spinner from "../../../components/common/LoginSpinner/Spinner";
import { loginUser } from "../../../redux/actions/authActions";
import "./Login.css";

const Login = (props) => {
  const { loginUser, auth, loading } = props;

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    errors: {},
  });

  const onSubmit = (e) => {
    e.preventDefault();
    // setLoading(true);

    const user = {
      email: formData.email,
      password: formData.password,
    };

    // console.log(user);
    loginUser(user);
  };

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (auth.isAuthenticated) {
      props.history.push("/dashboard");
    }
    setFormData({
      ...formData,
      errors: props.errors,
    });
    // eslint-disable-next-line
  }, [props.errors, auth.isAuthenticated]);

  const { errors } = formData;

  return (
    <>
      <div className="login__logo">
        <img src={logo} alt="" />
      </div>
      <div className="login__left__content">
        <h4 style={{ color: "#18B2D2" }}>OUR SOLUTION</h4>
        <p style={{ marginTop: "20px" }}>
          Our solution provides low-cost, carbon-free on demand power for
          households and small business across Nigeria.{" "}
        </p>

        <div className="login__left__content__span">
          <span className="login__left__content__border"></span>
          <span className="login__left__content__border_next"></span>
          <span className="login__left__content__border_next"></span>
        </div>
      </div>
      <div className="login__left__footer">
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
      <div className="login__form__overall">
        <div className="bg-image">
          <img src={bg} alt="" style={{ width: "520px" }} />
        </div>
        <div className="login__form">
          <form className="login__form_container" onSubmit={onSubmit}>
            <div className="login__container">
              <div className="login__header__main">
                <img src={capslock} alt="" />
                <div className="login__header__text">
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
                    value={formData.email}
                    id="email"
                    placeholder="Enter your email address"
                    onChange={onChange}
                  />
                </p>
                <p>
                  <div className="login__pass__forgot">
                    <label for="password" style={{ fontSize: "14px" }}>
                      Password
                    </label>
                    <Link to="/forgotpassword">
                      <span
                        style={{
                          color: "#1EB2A6",
                          cursor: "pointer",
                          fontSize: "10px",
                        }}
                      >
                        Forgot password ?
                      </span>
                    </Link>
                  </div>
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    id="password"
                    placeholder="Enter a password"
                    onChange={onChange}
                  />
                </p>
              </div>
              <p className="login__button">
                <input type="submit" name="go" id="go" value="Login" />
                <i className="feather icon-arrow-right login__arrow__style"></i>
                {loading && <Spinner />}
              </p>

              <p>
                <div className="login__pass__create">
                  <span for="password" style={{ fontSize: "14px" }}>
                    Don't have an account ?
                  </span>
                  <Link to="/register">
                    <span
                      style={{
                        color: "#1EB2A6",
                        marginLeft: "2px",
                        cursor: "pointer",
                        fontSize: "14px",
                      }}
                    >
                      Create an account
                    </span>
                  </Link>
                </div>
              </p>

              {/* {errors && errors.error} */}
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
  loading: state.auth.loading,
});

export default connect(mapStateToProps, { loginUser })(Login);
