import cx from "classnames";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavItemOption = (props) => {
  const [showMenu, setShowMenu] = useState(false);

  const showMenuClass = cx("nav-item-menu", { hide: showMenu });

  return (
    <div className={showMenuClass}>
      <div
        className={"nav-item  nav-item-arrow"}
        onClick={() => setShowMenu(!showMenu)}
      >
        <p className="nav-item-name">{props.name}</p>
      </div>
      <div className={"submenu"}>
        {props.menus.map((x, i) => {
          return (
            <p key={i} className="submenu-item">
              <Link to={x[1]}>{x[0]}</Link>
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default NavItemOption;
