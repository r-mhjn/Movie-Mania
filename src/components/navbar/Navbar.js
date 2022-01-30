import React from "react";
import { Container, Navbar } from "react-bootstrap";
import "./navbar.scss"

const NavbarComponent = () => {
    return (
        <Navbar expand="lg" className="navbar" id="navbar">
            <Container>
                <Navbar.Brand className="navbar-brand-text">Movie Mania</Navbar.Brand>
            </Container>
        </Navbar>
    );
}

export default NavbarComponent;
