import React, { useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { connect } from "react-redux";
import { setCurrentTruckId } from "../actions";
const OperatorTrucks = (props) => {
  const handleClick = (e) => {
    props.setCurrentTruckId(props.truck.truck_id);
  };

  return (
    <div className="FoodTruck">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={props.truck.truck_img} />
        <Card.Body>
          <Card.Title>Food Truck</Card.Title>
          <Card.Text>{props.truck.cuisine_type}</Card.Text>
          <LinkContainer to="/EditTruckForm">
            <Button variant="primary">Edit Truck</Button>
          </LinkContainer>
          <LinkContainer to="/TruckMenu" onClick={(e) => handleClick()}>
            <Button variant="secondary">View Menu</Button>
          </LinkContainer>
        </Card.Body>
      </Card>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state.current_truck_id);
  return {
    current_truck_id: state.current_truck_id,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setCurrentTruckId: (id) => {
      dispatch(setCurrentTruckId(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(OperatorTrucks);
