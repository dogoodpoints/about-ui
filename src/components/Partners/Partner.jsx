import React from "react";
import classes from "./Partner.module.css";
import { Col, Row, Container } from "reactstrap";
import TextFadeIn from "../TextFadeIn.jsx/TextFadeIn";

function Partner() {
  return (
    <div className={classes.container}>
      <Container>
        <Row className="justify-content-center align-items-center">
          <Col md={12} className={`text-center px-4 ${classes.heading}`}>
            Partners
          </Col>
          <Col md={10} className="px-4">
            <TextFadeIn>
              <Row className="mt-5 justify-content-center">
                <Col xs={6} sm={3} className="text-center mb-4">
                  <img
                    src="/images/uncharitable.png"
                    alt="streamlabs"
                    className={classes.empathyImage}
                  />
                </Col>
                <Col xs={6} sm={3} className="text-center mb-4">
                  <img
                    src="/images/empathy.png"
                    alt="playerTwo"
                    className={classes.empathyImage}
                  />
                </Col>
                <Col xs={6} sm={3} className="text-center mb-4">
                  <img
                    src="/images/sca.png"
                    alt="twitch"
                    className={classes.partnerImage}
                  />
                </Col>
              </Row>
            </TextFadeIn>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Partner;
