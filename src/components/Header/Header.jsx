// Header.js
import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  Button,
  Container,
  Collapse,
  NavbarToggler,
} from "reactstrap";
import classes from "./Header.module.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar className="py-4">
      <Container>
        {/* Main header row */}
        <div className={classes.headerRow}>
          <NavbarBrand href="/">
            <img src="/images/logo.png" alt="Logo" className={classes.logo} />
          </NavbarBrand>

          {/* Desktop buttons */}
          <div className={classes.desktopNav}>
            <NavItem>
              <Button
                className="mx-3 secondary-btn hover-button"
                onClick={() =>
                  (window.location.href =
                    "https://nonprofits.dogoodpoints.com/")
                }
              >
                For Nonprofits
              </Button>
            </NavItem>
            <NavItem>
              <Button
                className="primary-btn hover-button"
                onClick={() =>
                  (window.location.href = "https://brands.dogoodpoints.com/")
                }
              >
                For Business
              </Button>
            </NavItem>
          </div>

          {/* Mobile menu toggle */}
          <NavbarToggler onClick={toggle} className={classes.mobileToggle} />
        </div>

        {/* Mobile menu */}
        <Collapse isOpen={isOpen} className={classes.mobileMenu}>
          <Nav className="flex-column w-100">
            <NavItem className="mb-3">
              <Button
                className="w-100 secondary-btn hover-button"
                onClick={() =>
                  (window.location.href =
                    "https://nonprofits.dogoodpoints.com/")
                }
              >
                For Nonprofits
              </Button>
            </NavItem>
            <NavItem>
              <Button
                className="w-100 primary-btn hover-button"
                onClick={() =>
                  (window.location.href = "https://brands.dogoodpoints.com/")
                }
              >
                For Business
              </Button>
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
