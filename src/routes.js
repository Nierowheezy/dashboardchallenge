import React, { lazy } from "react";
import { Route } from "react-router-dom";

const Dashboard = lazy(() => import("./pages/main/Main"));
const Test = lazy(() => import("./pages/Test/Test"));

const routeList = [
  {
    path: "/dashboard",
    exact: true,
    name: "dashboard",
    component: Dashboard,
  },
  {
    path: "/test",
    exact: true,
    name: "Test",
    component: Test,
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
