import React from "react";
import classes from "./Footer.module.css";
import { Col, Row } from "reactstrap";
import { motion } from "framer-motion";

export default function Footer() {
  const handleClick = (link) => {
    window.open(link, "_blank");
  };
  return (
    <div className={classes.footer}>
      <Row>
        <Col sm={1}>
          <img
            src="/images/DGP.png"
            alt="Do good point"
            className={classes.dgp}
          />
        </Col>
        <Col sm={2} style={{ marginLeft: "100px" }}>
          <div
            style={{ textAlign: "left", fontWeight: "bold" }}
            className="mb-3"
          >
            Learn More
          </div>
          <div
            className="mb-2 hover-link"
            onClick={() =>
              handleClick("https://www.dogoodpoints.com/about-dgp")
            }
          >
            About
          </div>
          <div
            className="mb-2 hover-link"
            onClick={() => handleClick("https://www.dogoodpoints.com/contact")}
          >
            Contact Us
          </div>
        </Col>
        <Col sm={2}>
          <div
            style={{ textAlign: "left", fontWeight: "bold" }}
            className="mb-3"
          >
            Discover
          </div>
          <div
            className="mb-2 hover-link"
            onClick={() => handleClick("https://www.dogoodpoints.com")}
          >
            Do Good Points
          </div>
          <div
            className="mb-2 hover-link"
            onClick={() => handleClick("https://www.dogoodpoints.com/funds")}
          >
            Do Good Funds
          </div>
          <div
            className="mb-2 hover-link"
            onClick={() =>
              handleClick("https://www.dogoodpoints.com/creatorsforgood")
            }
          >
            #CreatorsForGood
          </div>
          <div
            className="mb-2 hover-link"
            onClick={() => handleClick("https://shop.dogoodpoints.com/")}
          >
            Do Good Shop
          </div>
        </Col>

        <Col sm={2}>
          <div
            style={{ textAlign: "left", fontWeight: "bold" }}
            className="mb-3"
          >
            Business/Services
          </div>
          <div
            className="mb-2 hover-link"
            onClick={() =>
              handleClick("https://www.dogoodpoints.com/services/b2b")
            }
          >
            Services
          </div>
          <div
            className="mb-2 hover-link"
            onClick={() =>
              handleClick(
                "https://www.dogoodpoints.com/services/google-ad-grants"
              )
            }
          >
            Google Ad Grants
          </div>
          <div
            className="mb-2 hover-link"
            onClick={() =>
              handleClick(
                "https://www.dogoodpoints.com/services/fiscal-sponsorship"
              )
            }
          >
            Fiscal Sponsership
          </div>
          <div
            className="mb-2 hover-link"
            onClick={() => handleClick("https://ai.dogoodpoints.com/signin")}
          >
            DoGoodAi
          </div>
          <div
            className="mb-2 hover-link"
            onClick={() =>
              handleClick(
                "https://www.dogoodpoints.com/services/nonprofit-data-api"
              )
            }
          >
            Data API
          </div>
          <div
            className="mb-2 hover-link"
            onClick={() =>
              handleClick(
                "https://www.dogoodpoints.com/services/shop-merchindise"
              )
            }
          >
            Do Good Shop
          </div>
        </Col>
      </Row>
      <Row className="justify-content-between mt-3">
        <Col sm={3}>Copyright © {new Date().getFullYear()} Do Good Points.</Col>
        <Col sm={4} className="text-start">
          <span
            onClick={() => handleClick("https://www.dogoodpoints.com/privacy")}
          >
            {" "}
            Privacy
          </span>{" "}
          |{" "}
          <span
            onClick={() => handleClick("https://www.dogoodpoints.com/terms")}
          >
            {" "}
            Terms.
          </span>
        </Col>
        <Col sm={5} className="text-end">
          <motion.img
            src="/images/instagram.png"
            alt="insta"
            className={classes.logo}
            transition={{ type: "spring", stiffness: 300 }}
            whileHover={{
              scale: 1.2,
            }}
            onClick={() =>
              handleClick("https://www.instagram.com/dogoodpoints/#")
            }
          />
          <motion.img
            src="/images/facebook.png"
            alt="fb"
            className={classes.logo}
            transition={{ type: "spring", stiffness: 300 }}
            whileHover={{
              scale: 1.2,
            }}
            onClick={() => handleClick("https://www.facebook.com/dogoodpoints")}
          />
          <motion.img
            src="/images/ticktok.png"
            alt="ticktok"
            className={classes.logo}
            transition={{ type: "spring", stiffness: 300 }}
            whileHover={{
              scale: 1.2,
            }}
            onClick={() => handleClick("https://www.tiktok.com/@dogoodpoints")}
          />
          <motion.img
            src="/images/twitter.png"
            alt="twitter"
            className={classes.logo}
            transition={{ type: "spring", stiffness: 300 }}
            whileHover={{
              scale: 1.2,
            }}
            onClick={() => handleClick("https://twitter.com/DoGoodPoints")}
          />
          <motion.img
            src="/images/linkedin.png"
            alt="linkedin"
            style={{ height: 30, cursor: "pointer" }}
            transition={{ type: "spring", stiffness: 300 }}
            whileHover={{
              scale: 1.2,
            }}
            onClick={() =>
              handleClick("https://www.linkedin.com/company/do-good-points")
            }
          />
        </Col>
      </Row>
    </div>
  );
}
