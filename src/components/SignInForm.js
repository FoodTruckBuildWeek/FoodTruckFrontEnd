import React, { useState } from "react";
import { connect } from "react-redux";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import { setRole, setToken } from "../actions";
import styled from "styled-components";

const formSchema = {
  username: "",
  password: "",
  role: "client",
};

const SignInForm = (props) => {
  const [credentials, setCredentials] = useState(formSchema);

  const { setToken, setRole } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({
      ...credentials,
      [name]: value,
    });
  };

  const login = (e) => {
    e.preventDefault();
    //get token from server and save to local storage
    axios
      .post(
        "https://foodtruckbuildweek.herokuapp.com/api/auth/login",
        credentials
      )
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("role", res.data.role);
        console.log(res);
        setToken(res.data.token);
        setRole(res.data.role);
        //push to protected page if login is successful
        props.history.push("/protected");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <FormContainer>
      <h1>User Sign In Form</h1>
      <Form className="form" onSubmit={login}>
        <Form.Group controlId="formBasicUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Username"
            name="username"
            onChange={handleChange}
            value={credentials.username}
          />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter Password"
            name="password"
            onChange={handleChange}
            value={credentials.password}
          />
        </Form.Group>
        <select
          style={{ padding: "0.4em", marginBottom: "1em" }}
          name="role"
          onChange={handleChange}
        >
          <option value="client">Client</option>
          <option value="operator">Operator</option>
        </select>
        <br />
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </FormContainer>
  );
};

const mapStateToProps = (state) => {
  return { token: state.token };
};

export default connect(mapStateToProps, { setToken, setRole })(SignInForm);

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
