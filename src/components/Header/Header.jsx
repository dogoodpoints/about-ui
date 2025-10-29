// Header.js
import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  Container,
  Button,
  NavbarToggler,
  Collapse,
} from "reactstrap";
import classes from "./Header.module.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openContactWindow = () => {
    window.location.href = "/contact";
  };
  return (
    <Navbar expand="md">
      <Container className={classes.headerContainer}>
        <NavbarBrand
          href="https://home.dogoodpoints.com/"
          onClick={(e) => {
            e.preventDefault();
            window.location.href = "https://home.dogoodpoints.com/";
          }}
        >
          <img src="/images/logo.png" alt="Logo" className={classes.logo} />
        </NavbarBrand>
        <NavbarToggler
          onClick={() => setIsOpen((v) => !v)}
          className={classes.toggler}
        />
        <Collapse isOpen={isOpen} navbar className="justify-content-end">
          <Nav
            navbar
            className="ml-auto justify-content-between align-items-center py-3 py-md-4"
          >
            <div
              className={`d-flex flex-md-row flex-column align-items-md-center ${classes.menu}`}
            >
              <div
                className={`d-flex flex-md-row flex-column ${classes.links}`}
              >
                <NavItem>
                  <Button
                    className={`btn btn-link ${classes.linkBtn}`}
                    onClick={() => {
                      window.location.href = "https://about.dogoodpoints.com/";
                    }}
                  >
                    About Us
                  </Button>
                </NavItem>
                <NavItem>
                  <Button
                    className={`btn-link ${classes.linkBtn}`}
                    onClick={openContactWindow}
                  >
                    Contact Us
                  </Button>
                </NavItem>
              </div>
              <div className={`d-flex flex-md-row flex-column ${classes.ctas}`}>
                <NavItem>
                  <Button
                    className={`${classes.primaryBtn} hover-button`}
                    onClick={() => {
                      window.location.href = "https://naas.dogoodpoints.com/";
                    }}
                  >
                    NaaS
                  </Button>
                </NavItem>
                <NavItem>
                  <Button
                    className="mx-md-3 secondary-btn hover-button"
                    onClick={() => {
                      window.location.href =
                        "https://nonprofits.dogoodpoints.com/";
                    }}
                  >
                    For Nonprofits
                  </Button>
                </NavItem>
              </div>
            </div>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
