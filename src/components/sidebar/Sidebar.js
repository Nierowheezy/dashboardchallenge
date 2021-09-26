import PerfectScrollbar from "react-perfect-scrollbar";
import { Link } from "react-router-dom";
import crm from "../../assets/crm.png";
import DashboardIcon from "../../assets/DashboardIcon.png";
import fix from "../../assets/fix.png";
import inventory from "../../assets/inventory.png";
import logo from "../../assets/logo.png";
import monitor from "../../assets/monitor.png";
import receipt from "../../assets/receipt.png";
import request from "../../assets/request.png";
import wallet from "../../assets/wallet.png";
import NavItem from "../../layout/Navigation/NavItem";
import "./Sidebar.css";

const Sidebar = ({ sidebarOpen, closeSidebar }) => {
  return (
    <div className={sidebarOpen ? "sidebar_responsive" : ""} id="sidebar">
      <PerfectScrollbar scroll component="div" className="nav-body">
        <div className="sidebar__title">
          <div className="sidebar__img">
            <Link to="/dashboard">
              <img src={logo} alt="logo" />
            </Link>
          </div>
          <i
            onClick={() => closeSidebar()}
            className="fa fa-times"
            id="sidebarIcon"
            aria-hidden="true"
          ></i>
        </div>

        <div className="sidebar__menu">
          <div className="sidebar__link active_menu_link">
            <img src={DashboardIcon} alt="logo" />
            <div className="sidebar__link__spacing">
              <NavItem name="Dashboard" link="/dashboard" />
            </div>
          </div>

          <div className="sidebar__link">
            <img src={inventory} alt="logo" />
            <div className="sidebar__link__spacing">
              <NavItem name="Inventories" link="/inventories" />
            </div>
            <i className="feather icon-chevron-right sidebar__chevron"></i>
          </div>

          <div className="sidebar__link">
            <img src={fix} alt="logo" />
            <div className="sidebar__link__spacing">
              <NavItem name="Accessories" link="/accessories" />
            </div>

            <i className="feather icon-chevron-right sidebar__chevron"></i>
          </div>

          <div className="sidebar__link">
            <img src={crm} alt="logo" />
            <div className="sidebar__link__spacing">
              <NavItem name="CRM" link="/crm" />
            </div>
          </div>

          <div className="sidebar__link">
            <img src={request} alt="logo" />
            <div className="sidebar__link__spacing">
              <NavItem name="Service Request" link="/servicerquest" />
            </div>
          </div>

          <div className="sidebar__link">
            <img src={monitor} alt="logo" />
            <div className="sidebar__link__spacing">
              <NavItem name="Device" link="/servicerquest" />
            </div>
          </div>

          <div className="sidebar__link">
            <img src={wallet} alt="logo" />
            <div className="sidebar__link__spacing">
              <NavItem name="Payment History" link="/paymenthistory" />
            </div>
            <i className="feather icon-chevron-right sidebar__chevron"></i>
          </div>

          <div className="sidebar__link">
            <img src={receipt} alt="logo" />
            <div className="sidebar__link__spacing">
              <NavItem name="Ticket" link="/ticket" />
            </div>
          </div>

          <div className="sidebar__link">
            <img src={receipt} alt="logo" />
            <div className="sidebar__link__spacing">
              <NavItem name="Test" link="/test" />
            </div>
          </div>

          {/* <div className="sidebar__link">
            <NavItemOption
              name="Accessories"
              menus={[["Accessories", "/accessories"]]}
            />
          </div> */}
        </div>

        {/* <div className="sidebar__menu">
        <div className="sidebar__link active_menu_link">
          <i className="fa fa-home"></i>
          <a href="#">Dashboard</a>
        </div>
        <h2>MNG</h2>
        <div className="sidebar__link">
          <i className="fa fa-user-secret" aria-hidden="true"></i>
          <a href="#">Admin Management</a>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-building-o"></i>
          <a href="#">Company Management</a>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-wrench"></i>
          <a href="#">Employee Management</a>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-archive"></i>
          <a href="#">Warehouse</a>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-handshake-o"></i>
          <a href="#">Contracts</a>
        </div>
        <h2>LEAVE</h2>
        <div className="sidebar__link">
          <i className="fa fa-question"></i>
          <a href="#">Requests</a>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-sign-out"></i>
          <a href="#">Leave Policy</a>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-calendar-check-o"></i>
          <a href="#">Special Days</a>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-files-o"></i>
          <a href="#">Apply for leave</a>
        </div>
        <h2>PAYROLL</h2>
        <div className="sidebar__link">
          <i className="fa fa-money"></i>
          <a href="#">Payroll</a>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-briefcase"></i>
          <a href="#">Paygrade</a>
        </div>
        <div className="sidebar__logout">
          <i className="fa fa-power-off"></i>
          <a href="#">Log out</a>
        </div>
      </div> */}
      </PerfectScrollbar>
    </div>
  );
};

export default Sidebar;
