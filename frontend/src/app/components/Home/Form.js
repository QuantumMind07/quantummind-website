"use client";
import React, { useState } from "react";
import { Form, Col, Grid, Row, SelectPicker, InputGroup, Input, Button } from "rsuite";
import MemberIcon from "@rsuite/icons/Member";
import EmailFillIcon from "@rsuite/icons/EmailFill";
import BusinessIcon from "@mui/icons-material/Business";
import WorkIcon from "@mui/icons-material/Work";

const ContactUsForm = ({data}) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    companyName: "",
    jobTitle: "",
    country: null,
    description: "",
  });

  const handleChange = (value, name) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const Textarea = React.forwardRef((props, ref) => (
    <Input {...props} as="textarea" placeholder="Write Description Or Glimpse What You Really Want To Build" ref={ref} />
  ));

  const countryOptions = data.map((country)=>({
    label: country.name.common,
    value: country.name.common,
  }))
  return (
    <div className="Form-Layout mt-[90px] mb-[90px]">
      <div className="heading text-center">
        <h3 className="font-bold">🚀 What Can We Build For You?</h3>
        <p className="text-gray-600">
          Let’s discuss your ideas. We will send you an NDA before we talk. All the information is kept confidential! 🔒
        </p>
      </div>

      <div className="form flex justify-center items-center mt-5">
        <Form fluid className="w-[75%]">
          <Grid fluid>
            <Row gutter={15} style={{ marginTop: "16px" }}>
              <Col xs={24} md={12}>
                <Form.Group controlId="First Name">
                  <Form.ControlLabel>First Name</Form.ControlLabel>
                  <InputGroup inside>
                    <Form.Control
                      name="firstName"
                      placeholder="Enter First Name"
                      value={formData.firstName}
                      onChange={(value) => handleChange(value, "firstName")}
                    />
                    <InputGroup.Addon>
                      <MemberIcon />
                    </InputGroup.Addon>
                  </InputGroup>
                </Form.Group>
              </Col>
              <Col xs={24} md={12}>
                <Form.Group controlId="Last Name">
                  <Form.ControlLabel>Last Name</Form.ControlLabel>
                  <InputGroup inside>
                    <Form.Control
                      name="lastName"
                      placeholder="Enter Last Name"
                      value={formData.lastName}
                      onChange={(value) => handleChange(value, "lastName")}
                    />
                    <InputGroup.Addon>
                      <MemberIcon />
                    </InputGroup.Addon>
                  </InputGroup>
                </Form.Group>
              </Col>
            </Row>

            <Row gutter={15} style={{ marginTop: "16px" }}>
              <Col xs={24}>
                <Form.Group controlId="email">
                  <Form.ControlLabel>Email</Form.ControlLabel>
                  <InputGroup inside>
                    <Form.Control
                      name="email"
                      placeholder="Enter Email"
                      type="email"
                      value={formData.email}
                      onChange={(value) => handleChange(value, "email")}
                    />
                    <InputGroup.Addon>
                      <EmailFillIcon />
                    </InputGroup.Addon>
                  </InputGroup>
                </Form.Group>
              </Col>
            </Row>

            <Row gutter={15} style={{ marginTop: "16px" }}>
              <Col xs={24}>
                <Form.Group controlId="Company Name">
                  <Form.ControlLabel>Company Name</Form.ControlLabel>
                  <InputGroup inside>
                    <Form.Control
                      name="companyName"
                      placeholder="Enter Company Name"
                      value={formData.companyName}
                      onChange={(value) => handleChange(value, "companyName")}
                    />
                    <InputGroup.Addon>
                      <BusinessIcon fontSize="inherit" />
                    </InputGroup.Addon>
                  </InputGroup>
                </Form.Group>
              </Col>
            </Row>

            <Row gutter={15} style={{ marginTop: "16px" }}>
              <Col xs={24}>
                <Form.Group controlId="Job Title">
                  <Form.ControlLabel>Job Title</Form.ControlLabel>
                  <InputGroup inside>
                    <Form.Control
                      name="jobTitle"
                      placeholder="Enter Job Title"
                      value={formData.jobTitle}
                      onChange={(value) => handleChange(value, "jobTitle")}
                    />
                    <InputGroup.Addon>
                      <WorkIcon fontSize="inherit" />
                    </InputGroup.Addon>
                  </InputGroup>
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col xs={24} style={{ marginTop: "16px" }}>
                <Form.Group controlId="Select a Country">
                  <Form.ControlLabel>Select a Country</Form.ControlLabel>
                  <SelectPicker
                   data={countryOptions}
                    block
                    cleanable={false}
                    value={formData.country}
                    onChange={(value) => handleChange(value, "country")}
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col xs={24} style={{ marginTop: "16px" }}>
                <Form.Group controlId="Description">
                  <Form.ControlLabel>Description</Form.ControlLabel>
                  <Form.Control
                    rows={5}
                    name="description"
                    accepter={Textarea}
                    value={formData.description}
                    onChange={(value) => handleChange(value, "description")}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col xs={24} className="text-center mt-5">
                <Button appearance="primary" block  className="!bg-textcolortheme" size="lg">
                  Submit ✨
                </Button>
              </Col>
            </Row>
          </Grid>
        </Form>
      </div>
    </div>
  );
};

export default ContactUsForm;
