import React from "react";
import classes from "./Description.module.css";
import { Col, Row, Container, Button } from "reactstrap";
import TextFadeIn from "../TextFadeIn.jsx/TextFadeIn";

function Description() {
  return (
    <div
      className={classes.description}
      style={{ "--hero-bg": `url(${process.env.PUBLIC_URL}/images/hero.png)` }}
    >
      <Container>
        <Row className="justify-content-center">
          <Col
            lg="8"
            md="10"
            sm="11"
            className={`px-4 ${classes.titleContainer}`}
          >
            <h3 className={classes.descriptionTitle}>
              Launch a Nonprofit In Days–not Years
            </h3>
            <div className={classes.descriptionText}>
              <TextFadeIn>
                Do Good’s Nonprofit-as-a-Service (NaaS) platform gives you
                instant nonprofit status — without the legal, financial, or
                operational burden.
              </TextFadeIn>
            </div>
            <div className={classes.buttonWrapper}>
              <Button
                className={`primary-btn hover-button ${classes.ctaButton}`}
                onClick={() =>
                  window.open(
                    "https://meetings.hubspot.com/do-good/naas?uuid=2aa286ae-cba2-4bb2-8088-0c7442b7becd",
                    "_blank",
                    "noopener,noreferrer"
                  )
                }
              >
                Learn More: Book a Call
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Description;
