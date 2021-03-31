import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Card, Button } from "react-bootstrap";
import { connect } from "react-redux";
import axios from "axios";

import Menu from "./Menu";

const TruckCard = (props) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const { capitalize, truck, location, getDistInKm } = props;
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
          {menuOpen && <Menu truck_id={truck.truck_id} />}
          <Button
            onClick={(e) => {
              setMenuOpen(!menuOpen);
            }}
            variant="primary"
          >
            {!menuOpen ? "See Menu" : "Close Menu"}
          </Button>
        </Card.Body>
      </Card>
    </CardContainer>
  );
};

const mapStateToProps = (state) => {
  return {
    capitalize: state.capitalize,
    location: state.location,
    getDistInKm: state.getDistInKm,
  };
};

export default connect(mapStateToProps, {})(TruckCard);

export const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;
