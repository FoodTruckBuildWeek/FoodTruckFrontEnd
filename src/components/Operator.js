import React, { useState, useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import OperatorTrucks from "./OperatorTrucks";
import axios from "axios";
import { connect } from "react-redux";
export const Operator = () => {
  const formSchema = {
    imageOfTruck: "",
    cuisineType: "",
    customerRatings: [],
    allTrucks: [],
  };
  const [trucks, setTrucks] = useState(formSchema);

  useEffect(() => {
    axios
      .get("https://foodtruckbuildweek.herokuapp.com/api/trucks")
      .then((res) => {
        console.log(res);
        setTrucks({ allTrucks: res.data });
      })
      .catch((err) => {
        console.log(err.response);
      });
  }, []);
  console.log(trucks.allTrucks);
  return (
    <div className="listContainer">
      {trucks.allTrucks.map((truck) => {
        return (
          <OperatorTrucks truck={truck} key={Date.now() + Math.random()} />
        );
      })}
    </div>
  );
};
