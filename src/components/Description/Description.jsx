import React from "react";
import classes from "./Description.module.css";
import { Col, Row, Container } from "reactstrap";
import TextFadeIn from "../TextFadeIn.jsx/TextFadeIn";

function Description() {
  return (
    <div className={classes.description}>
      <Container>
        <Row className="justify-content-center">
          <Col lg="8" md="10" sm="11" className="px-4">
            <TextFadeIn>
              Whether you're a for-profit business or brand, or a nonprofit
              organization, our mission is the same – to help you do more good.
              Our comprehensive suite of offerings has a solution for everyone.
            </TextFadeIn>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Description;
