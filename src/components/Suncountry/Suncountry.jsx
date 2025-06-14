import React from "react";
import { Col, Row } from "reactstrap";
import TextFadeIn from "../TextFadeIn.jsx/TextFadeIn";
import classes from "./Suncountry.module.css";

function Suncountry() {
  return (
    <div className={classes.container}>
      <img
        src="/images/airlines.png"
        alt="airlines"
        className={classes.bgImage}
      />
      <Row
        className={`justify-content-center align-items-center ${classes.contentWrapper}`}
      >
        <Col xs={10} sm={8} md={6} className={classes.content}>
          <img
            className={`mb-4 ${classes.logo}`}
            src="/images/suncountrylogo.png"
            alt="suncountry"
          />
          <TextFadeIn>
            <div className={classes.quote}>
              "DoGood saved us months of legal work and let us launch a global
              giving campaign in days."
            </div>
          </TextFadeIn>
          <div className={`mt-5 ${classes.attribution}`}>
            Suncountry Airlines
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Suncountry;
