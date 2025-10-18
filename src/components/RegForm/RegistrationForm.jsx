import React, { useState } from "react";
import {
  Form,
  FormGroup,
  Input,
  Button,
  Container,
  Row,
  Col,
  Label,
  FormText,
  Spinner,
} from "reactstrap";
import { motion, AnimatePresence } from "framer-motion";
import classes from "./RegistrationForm.module.css";

function RegistrationForm() {
  const [formData, setFormData] = useState({
    first: "",
    last: "",
    email: "",
    subject: "",
    message: "",
    orgType: "non-profit",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setShowSuccess(false);

    try {
      const response = await fetch(
        "https://www.dogoodpoints.com/dgp/v1/forms/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            first: formData.first,
            last: formData.last,
            email: formData.email,
            subject: formData.orgType
              ? `${formData.subject} - ${formData.orgType}`
              : formData.subject,
            message: formData.message,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      // Clear form after successful submission
      setFormData({
        first: "",
        last: "",
        email: "",
        subject: "",
        message: "",
        orgType: "",
      });

      setShowSuccess(true);
      setTimeout(() => {
        setShowSuccess(false);
      }, 3000); // Hide success message after 3 seconds
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to submit form. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={classes.wrapper}>
      <Container className="px-4 px-sm-5">
        <Row className="justify-content-center">
          <Col
            lg="8"
            md="10"
            sm="12"
            className="text-center px-2 px-sm-4 px-md-5"
          >
            <h3 className={classes.heading}>Get Started Today!</h3>
            <p className={classes.desc}>
              {" "}
              Let's talk about how NaaS can transform your brand into a
              purpose-driven powerhouse.
            </p>
            <Form onSubmit={handleSubmit}>
              <Row className="flex-wrap mt-5 justify-content-center">
                {/* First Name */}
                <Col sm="6">
                  <FormGroup className="floating-input">
                    <Input
                      type="text"
                      name="first"
                      id="first"
                      value={formData.first}
                      onChange={handleChange}
                      required
                      disabled={isLoading}
                    />
                    <label
                      className={formData.first ? "filled" : ""}
                      htmlFor="first"
                    >
                      First Name
                    </label>
                  </FormGroup>
                </Col>

                {/* Last Name */}
                <Col sm="6">
                  <FormGroup className="floating-input">
                    <Input
                      type="text"
                      name="last"
                      id="last"
                      value={formData.last}
                      onChange={handleChange}
                      required
                      disabled={isLoading}
                    />
                    <label
                      className={formData.last ? "filled" : ""}
                      htmlFor="last"
                    >
                      Last Name
                    </label>
                  </FormGroup>
                </Col>

                {/* Email */}
                <Col sm="12">
                  <FormGroup className="floating-input">
                    <Input
                      type="email"
                      name="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      disabled={isLoading}
                    />
                    <label
                      className={formData.email ? "filled" : ""}
                      htmlFor="email"
                    >
                      Email
                    </label>
                  </FormGroup>
                </Col>

                {/* Subject */}
                <Col sm="12">
                  <FormGroup className="floating-input">
                    <Input
                      type="text"
                      name="subject"
                      id="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      disabled={isLoading}
                    />
                    <label
                      className={formData.subject ? "filled" : ""}
                      htmlFor="subject"
                    >
                      Subject
                    </label>
                  </FormGroup>
                </Col>

                {/* Organization Type */}
                <Col sm="11">
                  <FormGroup
                    tag="fieldset"
                    className="d-flex align-items-center font-size-10"
                  >
                    <div className="me-4" style={{ minWidth: "120px" }}>
                      Organization Type
                    </div>
                    <div className="d-flex align-items-center gap-4">
                      <FormGroup check className="m-0">
                        <Input
                          type="radio"
                          name="orgType"
                          value="non-profit"
                          id="non-profit"
                          onChange={handleChange}
                          checked={formData.orgType === "non-profit"}
                          disabled={isLoading}
                        />
                        <Label check htmlFor="non-profit">
                          Non-profit
                        </Label>
                      </FormGroup>
                      <FormGroup check className="m-0">
                        <Input
                          type="radio"
                          name="orgType"
                          value="business"
                          id="business"
                          onChange={handleChange}
                          checked={formData.orgType === "business"}
                          disabled={isLoading}
                        />
                        <Label check htmlFor="business">
                          Business
                        </Label>
                      </FormGroup>
                    </div>
                    {!formData.orgType && (
                      <FormText color="danger" className="ms-3">
                        Please select one.
                      </FormText>
                    )}
                  </FormGroup>
                </Col>

                {/* Message */}
                <Col sm="12">
                  <FormGroup className="floating-input">
                    <Input
                      type="textarea"
                      name="message"
                      id="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      disabled={isLoading}
                      style={{ minHeight: 150 }}
                    />
                    <label
                      className={formData.message ? "filled" : ""}
                      htmlFor="message"
                    >
                      Message
                    </label>
                  </FormGroup>
                </Col>

                <Col sm="12" className="w-100">
                  <motion.div
                    whileHover={!isLoading ? { scale: 1.02 } : {}}
                    whileTap={!isLoading ? { scale: 0.98 } : {}}
                  >
                    <Button
                      color="primary"
                      type="submit"
                      className="w-100 p-2 position-relative"
                      style={{ backgroundColor: "#333" }}
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <Spinner size="sm" color="light" />
                      ) : (
                        "Submit"
                      )}
                    </Button>
                  </motion.div>
                </Col>
              </Row>
            </Form>
            <div style={{ marginTop: "42px", color: "#fff", fontSize: 24 }}>
              <Row>
                <Col>Or</Col>
              </Row>
              <Row>
                <Col className="mt-4">
                  Prefer email? Write us at{" "}
                  <a
                    href="mailto:partners@dogoodpoints.com"
                    style={{
                      color: "#fff",
                      fontWeight: "bold",
                      textDecoration: "none",
                    }}
                  >
                    partners@dogoodpoints.com
                  </a>
                </Col>
              </Row>
            </div>

            {/* Success Message */}
            <AnimatePresence>
              {showSuccess && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="mt-3 p-3 rounded"
                  style={{
                    backgroundColor: "#4CAF50",
                    color: "white",
                  }}
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    ✓ Form submitted successfully!
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default RegistrationForm;
