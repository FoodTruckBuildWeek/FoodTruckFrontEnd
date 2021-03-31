import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useLocation } from "../hooks/useLocation";
import { Button, Card, Form, Dropdown } from "react-bootstrap";
import styled from "styled-components";
import axios from "axios";

const cuisineTypes = ["french", "mexican", "chinese"];
const distOptions = [10, 20, 30, 50];

const trucks = [
  {
    truck_id: 1,
    truck_img: "arturo-rey-m6fYkq_P2Cc-unsplash.jpg",
    cuisine_type: "french",
    departure_time: "7:00pm",
    latitude: "44.77777",
    longitude: "99.00333",
  },
];

const defaultCriteria = {
  cuisine_type: "Cuisine Type",
  radSize: 30,
};

const Diner = (props) => {
  const [favTrucks, setFavTrucks] = useState(trucks);
  const [trucksNearby, setTrucksNearby] = useState(trucks);
  const [location, getLocation, getDistInKm] = useLocation();
  const [searchCriteria, setSearchCriteria] = useState(defaultCriteria);

  const capitalize = (s) => {
    if (typeof s !== "string") return "";
    return s.charAt(0).toUpperCase() + s.slice(1);
  };

  const mapTrucksToCards = (trucks) => {
    return trucks.map((truck) => {
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
    });
  };

  const handleSelect = (e) => {
    const { name, value } = e.target;
    setSearchCriteria({ ...searchCriteria, [name]: value });
  };

  const handleSearch = (e) => {
    e.preventDefault();
    //use getDistInKm to filter nearby trucks with matching cuisine type
    setTrucksNearby(
      trucks.filter((truck) => {
        const isNearby =
          getDistInKm(location, truck.location) < searchCriteria.radSize;
        if (
          truck.cuisine_type.search(searchCriteria.cuisine_type) !== -1 &&
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
        <Label>Cuisine Type: </Label>
        <select
          name="cuisine_type"
          onChange={handleSelect}
          value={searchCriteria.cuisine_type}
        >
          {cuisineTypes.map((type) => {
            return <option value={type}>{capitalize(type)}</option>;
          })}
        </select>
        <Label>Distance (km): </Label>
        <select
          name="radSize"
          onChange={handleSelect}
          value={searchCriteria.radSize}
        >
          {distOptions.map((radSize) => {
            return (
              <option name="radSize" value={radSize}>
                {radSize}
              </option>
            );
          })}
        </select>
        <br />
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

const Label = styled.label`
  margin: 0;
  width: fit-content;
`;
