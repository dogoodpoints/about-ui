import React from "react";
import classes from "./Footer.module.css";
import { Col, Row, Container } from "reactstrap";
import { motion } from "framer-motion";

export default function Footer() {
  const handleClick = (link) => {
    window.open(link, "_blank");
  };

  const openContactWindow = () => {
    window.location.href = "/contact";
  };

  return (
    <div className={classes.footer}>
      <Container>
        <Row>
          <Col
            lg={2}
            md={3}
            xs={12}
            className="mb-4"
            style={{ textAlign: "start" }}
          >
            <img
              src="/images/DGP.png"
              alt="Do good point"
              className={classes.dgp}
            />
          </Col>
          <Col lg={2} md={3} xs={12} className={`mb-4 ${classes.footerColumn}`}>
            <div className={`mb-3 ${classes.footerHeadingStyle}`}>Company</div>
            <div
              className={`mb-2 hover-link ${classes.footerLinkStyle}`}
              onClick={() => handleClick("https://home.dogoodpoints.com/")}
            >
              Home
            </div>
            {/* <div
              className={`mb-2 hover-link ${classes.footerLinkStyle}`}
              onClick={() => handleClick("https://about.dogoodpoints.com")}
            >
              About Us
            </div> */}
            {/* <div
              className={`mb-2 hover-link ${classes.footerLinkStyle}`}
              onClick={() =>
                handleClick("https://www.dogoodpoints.com/blog-home")
              }
            >
              Do Good News
            </div> */}
            {/* <div
              className={`mb-2 hover-link ${classes.footerLinkStyle}`}
              onClick={() => handleClick("https://ai.dogoodpoints.com/signin")}
            >
              DoGoodAi
            </div> */}
            <div
              className={`mb-2 hover-link ${classes.footerLinkStyle}`}
              onClick={openContactWindow}
            >
              Contact Us
            </div>
          </Col>
          <Col lg={2} md={3} xs={12} className={`mb-4 ${classes.footerColumn}`}>
            <div className={`mb-3 ${classes.footerHeadingStyle}`}>Services</div>
            <div
              className={`mb-2 hover-link ${classes.footerLinkStyle}`}
              onClick={() => handleClick("https://naas.dogoodpoints.com")}
            >
              NaaS
            </div>
            <div
              className={`mb-2 hover-link ${classes.footerLinkStyle}`}
              onClick={() => handleClick("https://nonprofits.dogoodpoints.com")}
            >
              For Nonprofits
            </div>
          </Col>
          <Col lg={2} md={3} xs={6} className={`mb-4 ${classes.footerColumn}`}>
            <div className={`mb-3 ${classes.footerHeadingStyle}`}>
              Do Good Points
            </div>
            <div
              className={`mb-2 hover-link ${classes.footerLinkStyle}`}
              onClick={() =>
                handleClick("https://www.dogoodpoints.com/about-dgp")
              }
            >
              About Do Good Points
            </div>
            <div
              className={`mb-2 hover-link ${classes.footerLinkStyle}`}
              onClick={() =>
                handleClick("https://www.dogoodpoints.com/how-it-works")
              }
            >
              How it Works
            </div>
            <div
              className={`mb-2 hover-link ${classes.footerLinkStyle}`}
              onClick={() => handleClick("https://www.dogoodpoints.com/funds")}
            >
              Do Good Funds
            </div>
            <div
              className={`mb-2 hover-link ${classes.footerLinkStyle}`}
              onClick={() => handleClick("https://www.dogoodpoints.com/rog")}
            >
              ROG
            </div>
            {/* <div
              className={`mb-2 hover-link ${classes.footerLinkStyle}`}
              onClick={() => handleClick("https://www.dogoodpoints.com/funds")}
            >
              Do Good Funds
            </div>
            <div
              className={`mb-2 hover-link ${classes.footerLinkStyle}`}
              onClick={() =>
                handleClick("https://www.dogoodpoints.com/creatorsforgood")
              }
            >
              #CreatorsForGood
            </div>
            <div
              className={`mb-2 hover-link ${classes.footerLinkStyle}`}
              onClick={() => handleClick("https://shop.dogoodpoints.com/")}
            >
              Do Good Shop
            </div> */}
          </Col>
        </Row>
        <Row className="justify-content-between mt-5 align-items-end">
          <Col sm={3} xs={12} className="text-sm-start text-center mb-sm-0">
            Copyright © {new Date().getFullYear()} Do Good Points.
          </Col>
          <Col sm={4} xs={12} className="text-sm-start text-center mb-sm-0">
            <div className="d-flex align-items-center justify-content-center justify-content-sm-start">
              <span
                className={`hover-link ${classes.legalLink}`}
                onClick={() =>
                  handleClick("https://www.dogoodpoints.com/privacy")
                }
              >
                Privacy
              </span>
              <span className="mx-1">|</span>
              <span
                className={`hover-link ${classes.legalLink}`}
                onClick={() =>
                  handleClick("https://www.dogoodpoints.com/terms")
                }
              >
                Terms
              </span>
            </div>
          </Col>
          <Col
            sm={5}
            xs={12}
            className={`text-sm-end text-center ${classes.socialIconsWrapper}`}
          >
            <motion.img
              src="/images/instagram.png"
              alt="insta"
              className={classes.logo}
              transition={{ type: "spring", stiffness: 300 }}
              whileHover={{ scale: 1.2 }}
              onClick={() =>
                handleClick("https://www.instagram.com/dogoodpoints/#")
              }
            />
            <motion.img
              src="/images/facebook.png"
              alt="fb"
              className={classes.logo}
              transition={{ type: "spring", stiffness: 300 }}
              whileHover={{ scale: 1.2 }}
              onClick={() =>
                handleClick("https://www.facebook.com/dogoodpoints")
              }
            />
            <motion.img
              src="/images/ticktok.png"
              alt="ticktok"
              className={classes.logo}
              transition={{ type: "spring", stiffness: 300 }}
              whileHover={{ scale: 1.2 }}
              onClick={() =>
                handleClick("https://www.tiktok.com/@dogoodpoints")
              }
            />
            <motion.img
              src="/images/twitter.png"
              alt="twitter"
              className={classes.logo}
              transition={{ type: "spring", stiffness: 300 }}
              whileHover={{ scale: 1.2 }}
              onClick={() => handleClick("https://twitter.com/DoGoodPoints")}
            />
            <motion.img
              src="/images/linkedin.png"
              alt="linkedin"
              className={classes.logo}
              transition={{ type: "spring", stiffness: 300 }}
              whileHover={{ scale: 1.2 }}
              onClick={() =>
                handleClick("https://www.linkedin.com/company/do-good-points")
              }
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
