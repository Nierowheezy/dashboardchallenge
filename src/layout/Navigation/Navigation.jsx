import cx from "classnames";
import React, { useState } from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";
import NavHead from "./NavHead";
import "./Navigation.scss";
import NavItem from "./NavItem";
import NavItemOption from "./NavItemOption";

const Navigation = () => {
  const [show, setShow] = useState(false);

  const showClass = cx("nav", { on: show });

  return (
    <div className={showClass}>
      <NavHead show={show} setShow={setShow} />
      <PerfectScrollbar scroll component="div" className="nav-body">
        {/* <div className="nav-body"> */}
        <p className="nav-header-name">navigation</p>
        <NavItem name="Dashboard" link="/" />
        <p className="nav-header-name">menus</p>
        <NavItemOption
          name="Inventories"
          menus={[["Inventories", "/inventory"]]}
        />
        <NavItemOption
          name="Accessories"
          menus={[["Accessories", "/accessories"]]}
        />
        <NavItem name="SETTINGS" link="/settings" />
      </PerfectScrollbar>
    </div>
  );
};

export default Navigation;
