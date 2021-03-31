import React, { useState } from "react";
import { connect } from "react-redux";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import { propTypes } from "react-bootstrap/esm/Image";
import { setToken } from "../actions";

const formSchema = {
  username: "",
  password: "",
};

const SignInForm = (props) => {
  const [credentials, setCredentials] = useState(formSchema);

  const { token, setToken } = props;

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
        setToken(res.data.token);
        //push to protected page if login is successful
        props.history.push("/Diner");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
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
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
};

const mapStateToProps = (state) => {
  return { token: state.token };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setToken: (token) => {
      dispatch(setToken(token));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignInForm);
