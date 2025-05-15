import React from "react";
import { Col, Row } from "reactstrap";
import TextFadeIn from "../TextFadeIn.jsx/TextFadeIn";

function Suncountry() {
  return (
    <div style={{ position: "relative" }}>
      <img
        src="/images/airlines.png"
        alt="airlines"
        style={{ height: 435, width: "100%" }}
      />
      <Row
        className={"justify-content-center align-items-center"}
        style={{
          position: "absolute",
          top: 0,
          width: "100%",
          height: "100%",

          fontSize: "24px",
          fontWeight: "bold",
          color: "#fff",
        }}
      >
        <Col sm={6}>
          <img
            className="mb-4"
            src={"/images/suncountrylogo.png"}
            alt="suncountry"
            style={{ width: "67px", height: "67px" }}
          />
          <TextFadeIn>
            <div>
              “In the past, we had to establish international subsidiaries,
              ensure we were up to date on the regulations and tax code, and
              have extra sets of books.”
            </div>
          </TextFadeIn>
          <div className="mt-5" style={{ color: "white", fontSize: 16 }}>
            Suncountry Airlines
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Suncountry;
