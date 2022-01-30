import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { Redirect } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Content from "../components/content/Content";

import { unprotectedDashboardRoutes } from "./index";
// import AllProtectedRoutes from "./index";

import DashboardLayout from "../layouts/DashboardLayout";

// import { filterPermittedRoutes } from "../utilities/commonUtil";
// import { cloneDeep } from "lodash";

// let ProtectedRoutes = [];

// let updateRoutes = () => {
//   let _AllProtectedRoutes = cloneDeep(AllProtectedRoutes);
//   ProtectedRoutes = filterPermittedRoutes(_AllProtectedRoutes);
// };

// const ProtectedRoute = ({ component: Component, layout: Layout, ...rest }) => {
//   return (
//     <Route
//       {...rest}
//       render={(props) => {
//         return retrieveFromLocalStorage("token") ? (
//           <Layout>
//             <Component {...props} />
//           </Layout>
//         ) : (
//           <Redirect to={authRoutes.login.path} />
//         );
//       }}
//     />
//   );
// };

const LayoutWrapper = (Component) => {

  const Layout = () => {

    return (
      <React.Fragment>
        <Navbar />
        <Content>{Component}</Content>
      </React.Fragment>);
  }
  return Layout;

}

// const unprotectedRoutes = (Layout, routes) =>
//   Object.values(routes).map(({ path, component: Component }, index) => (
//     <Route
//       key={index}
//       path={path}
//       exact
//       render={(props) => (
//         <Layout>
//           <Component {...props} />
//         </Layout>
//       )}
//     />
//   ));

const unprotectedRoutesDashboardLayout = (Layout, routes) =>
  Object.values(routes).map(({ path, component: Component }, index) => (
    <Route
      key={index}
      path={path}
      exact
      // render={(props) => (
      //   <Layout>
      //     <Component {...props} />
      //   </Layout>
      // )}
      element={LayoutWrapper(Component)}
    />
  ));


const WebsiteRoutes = () => {
  console.log(unprotectedDashboardRoutes)
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
