import React, { useState, useEffect } from "react";
import { useParams, useHistory, Link } from "react-router-dom";
import { connect } from "react-redux";
import { Form, Button } from "react-bootstrap";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
const SignUpForm = (props) => {
  const { push } = useHistory();

  const formSchema = yup.object().shape({
    username: yup.string().min(3).max(15).required("Username Required"),
    email: yup.string().email("Invalid Email").required("Required"),
    password: yup.string().min(4).max(10).required(),
    confirmPassword: yup.string().oneOf([yup.ref("password"), null]),
    role: yup.string().lowercase("Option Required").required(),
  });
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(formSchema),
  });
  console.log(handleSubmit);

  //   const handleChange = (e) => {
  //     console.log(e.target.name);
  //     setFormValues({
  //       ...formValues,
  //       [e.target.name]: e.target.value,
  //     });
  //     console.log(formValues);
  //   };
  const submitForm = (data) => {
    delete data.confirmPassword;
    console.log(data);
    axios
      .post("https://foodtruckbuildweek.herokuapp.com/api/auth/register", data)
      .then((res) => {
        console.log(res);
        push(`/confirm`);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="formContainer">
      <h1>User Sign Up Form</h1>
      <Form className="form" onSubmit={handleSubmit(submitForm)}>
        <Form.Group controlId="formBasicUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Username"
            name="username"
            ref={register}
          />
          <Form.Text className="red-error-text">
            {errors.username?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            ref={register}
          />
          <Form.Text className="red-error-text">
            {errors.email?.message}
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter Password"
            name="password"
            ref={register}
          />
          <Form.Text className="red-error-text">
            {errors.password?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group controlId="formBasicCheckPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter Password"
            name="confirmPassword"
            ref={register}
          />
          <Form.Text className="red-error-text">
            {" "}
            {errors.confirmPassword && "Passwords Should Match!"}
          </Form.Text>
        </Form.Group>

        <Form.Group>
          <Form.Label>Select User Type</Form.Label>
          <Form.Control as="select" type="select" name="role" ref={register}>
            <option>Client</option>
            <option>Operator</option>
          </Form.Control>

          <Form.Text className="red-error-text">
            {errors.role?.message}
          </Form.Text>
        </Form.Group>

        <Button variant="danger" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    title: state.title,
  };
};
export default connect(mapStateToProps, {})(SignUpForm);
