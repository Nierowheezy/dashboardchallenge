import { lazy, useState } from "react";
import { Route, Switch } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import routes from "../../routes";
import "./Container.css";

const NotFoundPage = lazy(() =>
  import(/* webpackChunkName: "NotFoundPage" */ "../NotFoundPage/NotFoundPage")
);

const Container = () => {
  const [sidebarOpen, setsidebarOpen] = useState(false);
  const openSidebar = () => {
    setsidebarOpen(true);
  };
  const closeSidebar = () => {
    setsidebarOpen(false);
  };
  return (
    <div className="container">
      <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />
      <Navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar} />
      <div className="content">
        <Switch>
          {routes}
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    </div>
  );
};

export default Container;
