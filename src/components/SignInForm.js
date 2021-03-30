import React, { useState } from "react";
import { connect } from "react-redux";
import { Form, Button } from "react-bootstrap";

const formSchema = {
  username: "",
  password: "",
};

const SignInForm = () => {
  const [formValues, setFormValues] = useState(formSchema);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //get token from server and save to local storage
  };

  return (
    <>
      <h1>User Sign In Form</h1>
      <Form className="form" onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Username"
            name="username"
            onChange={handleChange}
            value={formValues.username}
          />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter Password"
            name="password"
            onChange={handleChange}
            value={formValues.password}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
};

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(SignInForm);
