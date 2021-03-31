import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Button, Form } from "react-bootstrap";
import styled from "styled-components";
import axios from "axios";
import { setLocation } from "../actions";
import { MAPS_API_KEY } from "../keys";
import TruckCard from "../components/TruckCard";

const cuisineTypes = ["french", "mexican", "vietnamese"];
const distOptions = [10, 20, 30, 50, 100000];


const defaultCriteria = {
  cuisine_type: cuisineTypes[0],
  radSize: 30,
};

const Diner = (props) => {
  const [trucks, setTrucks] = useState([]);
  const [favTrucks, setFavTrucks] = useState([]);
  const [trucksNearby, setTrucksNearby] = useState([]);
  const [searchCriteria, setSearchCriteria] = useState(defaultCriteria);

  const { getDistInKm, location, setLocation, capitalize } = props;

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
        const truckLocation = {
          latitude: truck.latitude,
          longitude: truck.longitude,
        };
        const isNearby =
          getDistInKm(location, truckLocation) < searchCriteria.radSize;
        if (truck.cuisine_type === searchCriteria.cuisine_type && isNearby) {
          return truck;
        }
        return null;
      })
    );
  };

  useEffect(() => {
    getLocation();
    //set available trucks and favorite trucks from server data
    axios
      .get("https://foodtruckbuildweek.herokuapp.com/api/trucks")
      .then((res) => {
        console.log(res);
        setTrucks(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <h1>Diner</h1>

      <h2>Favorite Trucks</h2>
      <div className="fav-trucks">{mapTrucksToCards(trucks)}</div>

      <Form className="form" onSubmit={handleSearch}>
        <h2>Trucks Nearby</h2>
        <div>Location: {`${location.latitude} ${location.longitude}`}</div>
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
      <div className="nearby-trucks">{mapTrucksToCards(trucksNearby)}</div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    token: state.token,
    capitalize: state.capitalize,
    location: state.location,
    getDistInKm: state.getDistInKm,
  };
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
