import React from "react";
import styled from "styled-components";
import { Card, Button } from "react-bootstrap";
import { connect } from "react-redux";

const TruckCard = (props) => {
  const { truck, location, getDistInKm } = props;
  const truckLocation = {
    latitude: truck.latitude,
    longitude: truck.longitude,
  };

  return (
    <CardContainer>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={truck.truck_img} />
        <Card.Body>
          <Card.Text>
            Distance: {`${getDistInKm(location, truckLocation)} km`}
          </Card.Text>
          <Card.Text>Cuisine Type: {truck.cuisine_type}</Card.Text>
          <Card.Text>Departure Time: {truck.departure_time}</Card.Text>
          <Button variant="primary">See Menu</Button>
        </Card.Body>
      </Card>
    </CardContainer>
  );
};

const mapStateToProps = (state) => {
  return { location: state.location, getDistInKm: state.getDistInKm };
};

export default connect(mapStateToProps, {})(TruckCard);

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
`;
