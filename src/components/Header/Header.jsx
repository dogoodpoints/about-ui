// Header.js
import React from "react";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
  Button,
} from "reactstrap";
import classes from "./Header.module.css";
const Header = () => (
  <Navbar expand="md">
    <Container>
      <Nav
        navbar
        className="ml-auto justify-content-between align-items-center py-4"
      >
        <NavbarBrand href="/">
          <img src="/images/logo.png" alt="Logo" className={classes.logo} />
        </NavbarBrand>
        <div className="d-flex">
          <NavItem>
            <Button className="mx-3 secondary-btn hover-button ">
              For Nonprofits
            </Button>
          </NavItem>
          <NavItem>
            <Button className="primary-btn hover-button ">For Business</Button>
          </NavItem>
        </div>
      </Nav>
    </Container>
  </Navbar>
);

export default Header;
