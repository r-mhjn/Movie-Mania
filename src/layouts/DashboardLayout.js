import React from "react";
import NavbarComponent from "../components/navbar/Navbar";
import Content from "../components/content/Content";

const DashboardLayout = ({ children }) => (
    <React.Fragment>
        <NavbarComponent />
        <Content>{children}</Content>
    </React.Fragment>
);

export default DashboardLayout;
