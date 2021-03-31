import React, { useState } from "react";
import styled from "styled-components";
import { Card, Button } from "react-bootstrap";
import { connect } from "react-redux";

const menuitems = [
  {
    menuitem_id: 1,
    item_name: "tacos",
    item_description: "3 soft shell tacos",
    item_img:
      "https://www.tacobell.com/images/offers-free-dlt-w-signup-001.jpg",
    item_price: "8.99",
  },
  {
    menuitem_id: 1,
    item_name: "tacos",
    item_description: "3 soft shell tacos",
    item_img:
      "https://www.tacobell.com/images/offers-free-dlt-w-signup-001.jpg",
    item_price: "8.99",
  },
  {
    menuitem_id: 1,
    item_name: "tacos",
    item_description: "3 soft shell tacos",
    item_img:
      "https://www.tacobell.com/images/offers-free-dlt-w-signup-001.jpg",
    item_price: "8.99",
  },
];

const TruckCard = (props) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const { capitalize, truck, location, getDistInKm } = props;
  const truckLocation = {
    latitude: truck.latitude,
    longitude: truck.longitude,
  };

  const mapMenuToCards = (menu) => {
    return (
      <CardContainer>
        {menuitems.map((item) => {
          return (
            <Card style={{ width: "9rem", margin: "1em" }}>
              <Card.Img variant="top" src={item.item_img} />
              <Card.Body>
                <Card.Title>{capitalize(item.item_name)}</Card.Title>
                <Card.Text>{item.item_description}</Card.Text>
                <Card.Text>Item Price: {`$${item.item_price}`}</Card.Text>
              </Card.Body>
            </Card>
          );
        })}
      </CardContainer>
    );
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
          {menuOpen && mapMenuToCards()}
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

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;
