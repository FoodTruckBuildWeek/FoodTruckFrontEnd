import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Form, Button } from "react-bootstrap";
const SignUpForm = (props) => {
  const formSchema = {
    username: "",
    email: "",
    password: "",
    role: "",
  };
  const [formValues, setFormValues] = useState(formSchema);

  const handleChange = (e) => {
    console.log(e.target.name);
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
    console.log(formValues);
  };

  return (
    <>
      <h1>User Sign Up Form</h1>
      <Form className="form">
        <Form.Group controlId="formBasicUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Username"
            name="username"
            inputRef={(node) => (formValues.email = node)}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            inputRef={(node) => (formValues.email = node)}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter Password"
            name="password"
            inputRef={(node) => (formValues.password = node)}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlSelect2">
          <Form.Label>Example multiple select</Form.Label>
          <Form.Control
            as="select"
            multiple
            name="role"
            inputRef={(node) => (formValues.role = node)}
            onChange={handleChange}
          >
            <option>Client</option>
            <option>Vendor</option>
          </Form.Control>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    title: state.title,
  };
};
export default connect(mapStateToProps, {})(SignUpForm);
