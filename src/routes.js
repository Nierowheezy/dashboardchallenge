import React, { lazy } from "react";
import { Route } from "react-router-dom";

const Dashboard = lazy(() => import("./pages/main/Main"));
const Settings = lazy(() => import("./pages/settings/Settings"));

const routeList = [
  {
    path: "/dashboard",
    exact: true,
    name: "dashboard",
    component: Dashboard,
  },
  {
    path: "/settings",
    exact: true,
    name: "Settings",
    component: Settings,
  },
];

const routes = routeList.map((route, index) => {
  return route.component ? (
    <Route
      key={index}
      path={route.path}
      exact={route.exact}
      name={route.name}
      render={(props) => <route.component {...props} />}
    />
  ) : null;
});

export default routes;
