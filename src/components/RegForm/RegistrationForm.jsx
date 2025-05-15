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
} from "reactstrap";
import classes from "./RegistrationForm.module.css";

function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <>
      <Row className={classes.wrapper}>
        <Col sm="6" className="text-center">
          <h3 className={classes.heading}>
            Ready to get started? Let's do good together.
          </h3>
          <Form onSubmit={handleSubmit}>
            <Row className="flex-wrap mt-5 justify-content-center">
              {/* Name */}
              <Col sm="6">
                <FormGroup className="floating-input">
                  <Input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                  <label
                    className={formData.name ? "filled" : ""}
                    htmlFor="name"
                  >
                    Name
                  </label>
                </FormGroup>
              </Col>

              {/* Email */}
              <Col sm="6">
                <FormGroup className="floating-input">
                  <Input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
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
                <FormGroup tag="fieldset" className="d-flex">
                  <div style={{ marginRight: "60px" }}>Organization Type</div>
                  <FormGroup check className="">
                    <Input
                      type="radio"
                      name="orgType"
                      value="non-profit"
                      id="non-profit"
                      onChange={handleChange}
                      checked={formData.orgType === "non-profit"}
                    />
                    <Label check htmlFor="non-profit">
                      Non-profit
                    </Label>
                  </FormGroup>
                  <FormGroup
                    check
                    style={{ marginRight: "60px", marginLeft: "30px " }}
                  >
                    <Input
                      type="radio"
                      name="orgType"
                      value="business"
                      id="business"
                      onChange={handleChange}
                      checked={formData.orgType === "business"}
                    />
                    <Label check htmlFor="business">
                      Business
                    </Label>
                  </FormGroup>
                  {!formData.orgType && (
                    <FormText color="danger">Please select one.</FormText>
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
                <Button
                  color="primary"
                  type="submit"
                  className="w-100 p-2"
                  style={{ backgroundColor: "#333" }}
                >
                  Submit
                </Button>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </>
  );
}

export default RegistrationForm;
