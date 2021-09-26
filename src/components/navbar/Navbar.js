import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import avatar from "../../assets/avatar.svg";
import { logoutUser } from "../../redux/actions/authActions";
import "./Navbar.css";

const Navbar = (props) => {
  const { logoutUser, sidebarOpen, openSidebar } = props;

  const onLogoutClick = (e) => {
    e.preventDefault();
    logoutUser(props.history);
    props.history.push("/login");
  };

  return (
    <nav className="navbar">
      <div className="nav_icon" onClick={() => openSidebar()}>
        <i className="fa fa-bars" aria-hidden="true"></i>
      </div>

      <div className="navbar__right">
        <a href="#">
          <i class="icon feather icon-mail" aria-hidden="true"></i>
        </a>
        <a href="">
          <i className="icon feather icon-bell"></i>
        </a>
        <a href="#!">
          <img width="30" src={avatar} className="avatar" alt="avatar" />
        </a>
        <i
          className="feather icon-power"
          onClick={onLogoutClick}
          style={{ cursor: "pointer", marginLeft: "10px" }}
        ></i>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logoutUser })(withRouter(Navbar));
