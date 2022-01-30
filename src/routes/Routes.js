import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { unprotectedDashboardRoutes } from "./index";
import DashboardLayout from "../layouts/DashboardLayout";

const RouteWrapper = (
  Component,
  Layout,
  ...props
) => (
  <Layout >
    <Component />
  </Layout>
);

const unprotectedRoutesDashboardLayout = (Layout, routes) =>
  Object.values(routes).map(({ path, component: Component }, index) => (
    <Route
      key={index}
      path={path}
      exact
      element={RouteWrapper(Component, Layout)}
    />
  ));


const WebsiteRoutes = () => {
  return (
    <Router>
      <Routes>
        {unprotectedRoutesDashboardLayout(
          DashboardLayout,
          unprotectedDashboardRoutes
        )}
      </Routes>
    </Router>
  );
};

export default WebsiteRoutes;
