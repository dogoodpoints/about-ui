import React, { useEffect, useRef } from "react";
import { Row, Col } from "reactstrap";
import classes from "./RegistrationForm.module.css";

function RegistrationForm() {
  const hsContainerRef = useRef(null);
  const hsInitializedRef = useRef(false);

  // No local form state; HubSpot handles rendering and submission

  useEffect(() => {
    if (hsInitializedRef.current) return;
    hsInitializedRef.current = true;

    function loadV2Script() {
      return new Promise((resolve, reject) => {
        if (window.hbspt?.forms?.create) {
          resolve();
          return;
        }
        const existing = document.querySelector(
          'script[src="https://js.hsforms.net/forms/embed/v2.js"]'
        );
        if (existing) {
          if (existing.getAttribute("data-loaded") === "true") {
            resolve();
            return;
          }
          existing.addEventListener("load", () => resolve());
          existing.addEventListener("error", reject);
          return;
        }
        const s = document.createElement("script");
        s.src = "https://js.hsforms.net/forms/embed/v2.js";
        s.async = true;
        s.onload = () => {
          s.setAttribute("data-loaded", "true");
          resolve();
        };
        s.onerror = reject;
        document.body.appendChild(s);
      });
    }

    async function initHs() {
      await loadV2Script();
      if (!hsContainerRef.current || !window.hbspt?.forms?.create) return;
      if (window.__HS_REG_FORM_INITED) return;
      window.__HS_REG_FORM_INITED = true;
      hsContainerRef.current.innerHTML = "";
      window.hbspt.forms.create({
        portalId: "50161584",
        formId: "1b10c7c1-c4e3-411b-ad7c-2a981c81c0bd",
        region: "na1",
        target: "#hs-form-root-reg",
      });
    }

    initHs();
  }, []);

  return (
    <Row className={classes.wrapper}>
      <Col sm="6" className="text-center">
        <>
          <div ref={hsContainerRef} id="hs-form-root-reg" />
        </>

        <p className={classes.or}>Or</p>
        <p className={classes.email}>
          Prefer email? Write us at
          <br />
          <b href="mailto:partners@dogoodpoints.com">
            partners@dogoodpoints.com
          </b>
        </p>
      </Col>
    </Row>
  );
}

export default RegistrationForm;
