import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Button, Form } from "react-bootstrap";
import styled from "styled-components";
import axios from "axios";
import { setLocation } from "../actions";

import TruckCard from "../components/TruckCard";

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
  const [searchCriteria, setSearchCriteria] = useState(defaultCriteria);

  const { getDistInKm, location, setLocation } = props;

  const getLocation = () => {
    const errorHandler = (err) => {
      if (err.code === 1) {
        alert("Error: Access is denied!");
      } else if (err.code === 2) {
        alert("Error: Position is unavailable!");
      }
    };

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          setLocation({ latitude: latitude, longitude: longitude });
        },
        errorHandler,
        { timeout: 60000 }
      );
    } else {
      alert("Sorry, browser does not support geolocation!");
    }
  };

  const capitalize = (s) => {
    if (typeof s !== "string") return "";
    return s.charAt(0).toUpperCase() + s.slice(1);
  };

  const mapTrucksToCards = (trucks) => {
    return trucks.map((truck) => {
      return <TruckCard truck={truck} />;
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
  return { location: state.location, getDistInKm: state.getDistInKm };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setLocation: (location) => {
      dispatch(setLocation(location));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Diner);

const Label = styled.label`
  margin: 0;
  width: fit-content;
`;
