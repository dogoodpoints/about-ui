import React from "react";
import classes from "./Description.module.css";
import { Col, Row } from "reactstrap";
import TextFadeIn from "../TextFadeIn.jsx/TextFadeIn";

function Description() {
  return (
    <>
      <div className={classes.description}>
        <Row className="justify-content-center">
          <Col sm="8">
            <TextFadeIn>
              Whether you’re a for-profit business or brand, or a nonprofit
              organization, our mission is the same – to help you do more good.
              Our comprehensive suite of offerings has a solution for everyone.
            </TextFadeIn>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Description;
