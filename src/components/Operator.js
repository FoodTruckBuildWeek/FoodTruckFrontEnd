import React, { useState, useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
export const Operator = () => {
  const formSchema = {
    imageOfTruck: "",
    cuisineType: "",
    customerRatings: [],
  };

  const [trucks, setTrucks] = useState(formSchema);

  return (
    <div className="FoodTruck">
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.mtlblog.com%2Fu%2F2018%2F04%2F03%2Faa440c103b0e8954d031664dcb2ebd9d7fa1c305.jpg_1200x630.jpg&f=1&nofb=1"
        />
        <Card.Body>
          <Card.Title>Insert Food Truck name Here</Card.Title>
          <Card.Text>Insert Food Truck Text here</Card.Text>
          <Button variant="primary">Edit Truck</Button>
          <LinkContainer to="/TruckMenu">
            <Button variant="secondary">View Menu</Button>
          </LinkContainer>
        </Card.Body>
      </Card>
    </div>
  );
};
