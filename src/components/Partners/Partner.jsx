import React from "react";
import classes from "./Partner.module.css";
import { Col, Row } from "reactstrap";
import TextFadeIn from "../TextFadeIn.jsx/TextFadeIn";
function Partner() {
  return (
    <div className={classes.containr}>
      <Row className="justify-content-center align-items-center">
        <Col
          md={12}
          className="text-center"
          style={{ fontSize: "24px", fontWeight: "bold" }}
        >
          Our Partners
        </Col>
        <Col md={10}>
          <TextFadeIn>
            <Row className="mt-5">
              <Col xs={3} className="text-center">
                <img
                  src="/images/streamlabs.png"
                  alt="streamlabs"
                  style={{ height: 30, width: 180 }}
                />
              </Col>
              <Col xs={3} className="text-center">
                <img
                  src="/images/playerTwo.png"
                  alt="playerTwo"
                  style={{ height: 45, width: 157, objectFit: "contain" }}
                />
              </Col>
              <Col xs={3} className="text-center">
                <img
                  src="/images/Twitch.png"
                  alt="twitch"
                  style={{ height: 30, width: 100 }}
                />
              </Col>
              <Col xs={3} className="text-center">
                <img
                  src="/images/benLogo.png"
                  alt="benLogo"
                  style={{ height: 30, width: 100 }}
                />
              </Col>
            </Row>
          </TextFadeIn>
        </Col>
      </Row>
    </div>
  );
}

export default Partner;
