import React from "react";
import { Card, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const OperatorTrucks = (props) => {
  return (
    <div className="FoodTruck">
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src={`unsplash.com/photos/${props.truck_img}`}
        />
        <Card.Body>
          <Card.Title>Food Truck</Card.Title>
          <Card.Text>{props.truck.cuisine_type}</Card.Text>
          <LinkContainer to="/EditTruckForm">
            <Button variant="primary">Edit Truck</Button>
          </LinkContainer>
          <LinkContainer to="/TruckMenu">
            <Button variant="secondary">View Menu</Button>
          </LinkContainer>
        </Card.Body>
      </Card>
    </div>
  );
};

export default OperatorTrucks;
