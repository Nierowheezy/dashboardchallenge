import React from "react";
import { Link } from "react-router-dom";

const NavItem = (props) => {
  return (
    <Link to={props.link}>
      <div className="nav-item">
        {/* <i className="feather icon-home"></i> */}
        <p className="nav-item-name">{props.name}</p>
      </div>
    </Link>
  );
};

export default NavItem;
