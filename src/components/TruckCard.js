import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Card, Button } from "react-bootstrap";
import { connect } from "react-redux";
import axios from "axios";

import Menu from "./Menu";

const TruckCard = (props) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const { truck, location, getDistInKm } = props;
  const truckLocation = {
    latitude: truck.latitude,
    longitude: truck.longitude,
  };

  return (
    <CardContainer>
      <Card style={{ width: "16rem" }}>
        <div
          style={{
            height: "150px",
            overflow: "hidden",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Card.Img variant="top" src={truck.truck_img} />
        </div>
        <Card.Body>
          <div>Distance: {`${getDistInKm(location, truckLocation)} km`}</div>
          <div>Cuisine Type: {truck.cuisine_type}</div>
          {menuOpen && <Menu truck_id={truck.truck_id} />}
          <Button
            onClick={(e) => {
              setMenuOpen(!menuOpen);
            }}
            style={{ margin: "1em 0" }}
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
  margin: 0 1em;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;
