import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useLocation } from "../hooks/useLocation";
import { Button, Card, Form } from "react-bootstrap";
import styled from "styled-components";
import axios from "axios";

const trucks = [
  {
    imageOfTruck:
      "https://www.ddir.com/wp-content/uploads/2021/01/DDIR_foodtruck_16x9_LG-e1611626228384-1536x856.png",
    location: { latitude: 0, longitude: 0 },
  },
];

const defaultCriteria = {
  cuisineType: "",
  radSize: 30,
};

const Diner = (props) => {
  const [favTrucks, setFavTrucks] = useState(trucks);
  const [trucksNearby, setTrucksNearby] = useState(trucks);
  const [location, getLocation, getDistInKm] = useLocation();
  const [searchCriteria, setSearchCriteria] = useState(defaultCriteria);

  const mapTrucksToCards = (trucks) => {
    return trucks.map((truck) => {
      return (
        <CardContainer>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={truck.imageOfTruck} />
            <Card.Body>
              <Button variant="primary">See Menu</Button>
            </Card.Body>
          </Card>
        </CardContainer>
      );
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name !== "radSize" || /\D/.test(value)) {
      setSearchCriteria({
        ...searchCriteria,
        [name]: value,
      });
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    //use getDistInKm to filter nearby trucks with matching cuisine type
    setTrucksNearby(
      trucks.filter((truck) => {
        const isNearby =
          getDistInKm(location, truck.location) < searchCriteria.radius;
        if (
          truck.cuisineType.search(searchCriteria.cuisineType) !== -1 &&
          isNearby
        ) {
          return truck;
        }
        return null;
      })
    );
  };

  useEffect(() => {
    getLocation();
    //set available trucks and favorite trucks from server data
  }, []);

  return (
    <>
      <h1>Diner</h1>

      <h2>Favorite Trucks</h2>
      <div className="fav-trucks">{mapTrucksToCards(favTrucks)}</div>

      <div>Location: {`${location.latitude} ${location.longitude}`}</div>

      <Form className="form" onSubmit={handleSearch}>
        <Form.Group controlId="formBasicUsername">
          <Form.Label>Cuisine Type</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Cuisine Type"
            name="cuisineType"
            onChange={handleChange}
            value={searchCriteria.cuisineType}
          />
        </Form.Group>
        <Form.Group controlId="formBasicUsername">
          <Form.Label>Radius</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Distance"
            name="radSize"
            onChange={handleChange}
            value={searchCriteria.radSize}
          />
        </Form.Group>
        <Button variant="success" type="submit">
          Search
        </Button>
      </Form>
      <h2>Trucks Nearby</h2>
      <div className="nearby-trucks">{mapTrucksToCards(trucksNearby)}</div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Diner);

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
`;
