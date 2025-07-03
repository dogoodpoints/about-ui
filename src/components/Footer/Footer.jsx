import React from "react";
import classes from "./Footer.module.css";
import { Col, Row, Container } from "reactstrap";
import { motion } from "framer-motion";

export default function Footer() {
  const handleClick = (link) => {
    window.open(link, "_blank");
  };

  return (
    <div className={classes.footer}>
      <Container>
        <Row>
          <Col lg={2} md={3} xs={12} className="mb-4">
            <img
              src="/images/DGP.png"
              alt="Do good point"
              className={classes.dgp}
            />
          </Col>
          <Col lg={2} md={3} xs={6} className={`mb-4 ${classes.footerColumn}`}>
            <div className={`mb-3 ${classes.footerHeadingStyle}`}>
              Learn More
            </div>
            <div
              className={`mb-2 hover-link ${classes.footerLinkStyle}`}
              onClick={() => (window.location.href = "/")}
            >
              About
            </div>
            <div
              className={`mb-2 hover-link ${classes.footerLinkStyle}`}
              onClick={() =>
                handleClick("https://www.dogoodpoints.com/contact")
              }
            >
              Contact Us
            </div>
          </Col>
          <Col lg={2} md={3} xs={6} className={`mb-4 ${classes.footerColumn}`}>
            <div className={`mb-3 ${classes.footerHeadingStyle}`}>Discover</div>
            <div
              className={`mb-2 hover-link ${classes.footerLinkStyle}`}
              onClick={() => handleClick("https://www.dogoodpoints.com")}
            >
              Do Good Points
            </div>
            <div
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
            </div>
          </Col>

          <Col lg={4} md={3} xs={12} className={`mb-4 ${classes.footerColumn}`}>
            <div className={`mb-3 ${classes.footerHeadingStyle}`}>
              Business/Services
            </div>

            <div
              className={`mb-2 hover-link ${classes.footerLinkStyle}`}
              onClick={() =>
                handleClick(
                  "https://www.dogoodpoints.com/services/google-ad-grants"
                )
              }
            >
              Google Ad Grants
            </div>
            <div
              className={`mb-2 hover-link ${classes.footerLinkStyle}`}
              onClick={() =>
                handleClick(
                  "https://www.dogoodpoints.com/services/fiscal-sponsorship"
                )
              }
            >
              Fiscal Sponsorship
            </div>
            <div
              className={`mb-2 hover-link ${classes.footerLinkStyle}`}
              onClick={() => handleClick("https://ai.dogoodpoints.com/signin")}
            >
              DoGoodAi
            </div>
            <div
              className={`mb-2 hover-link ${classes.footerLinkStyle}`}
              onClick={() =>
                handleClick(
                  "https://www.dogoodpoints.com/services/nonprofit-data-api"
                )
              }
            >
              Data API
            </div>
          </Col>
        </Row>
        <Row className="justify-content-between mt-3">
          <Col
            sm={3}
            xs={12}
            className="text-sm-start text-center mb-sm-0 mb-3"
          >
            Copyright © {new Date().getFullYear()} Do Good Points.
          </Col>
          <Col
            sm={4}
            xs={12}
            className="text-sm-start text-center mb-sm-0 mb-3"
          >
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
