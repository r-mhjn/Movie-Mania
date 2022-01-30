import React from "react";
import Navbar from "../components/navbar/Navbar";
import Content from "../components/content/Content";

const DashboardLayout = ({ children }) => (
    <React.Fragment>
        <Navbar />
        <Content>{children}</Content>
    </React.Fragment>
);

export default DashboardLayout;
