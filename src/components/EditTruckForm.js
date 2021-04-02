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
    truck_id: yup
      .number()
      .positive("Must be greater than 0")
      .required("Username Required"),
    truck_img: yup.string().required("Required"),
    departure_time: yup.string().required("Required"),
    cuisine_type: yup.string().min(1).max(15).required(),
    longitude: yup.string().required(),
    latitude: yup.string().required(),
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
    console.log(data);
    axios
      .put(
        `https://foodtruckbuildweek.herokuapp.com/api/trucks/${props.current_truck_id}`,
        data
      )
      .then((res) => {
        console.log(res);
        push(`/success`);
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
          <Form.Label>Truck Id</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter Truck Id"
            name="truck_id"
            ref={register}
          />
          <Form.Text className="red-error-text">
            {errors.truck_id?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Image address</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter truck_img"
            name="truck_img"
            ref={register}
          />
          <Form.Text className="red-error-text">
            {errors.truck_image?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Departure Time</Form.Label>
          <Form.Control
            type="time"
            placeholder="Enter Departure Time"
            name="departure_time"
            ref={register}
          />
          <Form.Text className="red-error-text">
            {errors.truck_image?.message}
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Cuisine Type</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Cuisine Type"
            name="cuisine_type"
            ref={register}
          />
          <Form.Text className="red-error-text">
            {errors.password?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group controlId="formBasicCheckPassword">
          <Form.Label>Confirm longitude</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter longitude"
            name="longitude"
            ref={register}
          />
          <Form.Text className="red-error-text">
            {errors.longitude?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group controlId="formBasicCheckPassword">
          <Form.Label>Confirm Latitude</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter latitude"
            name="latitude"
            ref={register}
          />
          <Form.Text className="red-error-text">
            {errors.latitude?.message}
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
    current_truck_id: state.current_truck_id,
  };
};
export default connect(mapStateToProps, {})(SignUpForm);
