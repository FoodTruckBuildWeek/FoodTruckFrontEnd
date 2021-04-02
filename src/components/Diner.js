import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Button, Form } from "react-bootstrap";
import styled from "styled-components";
import axios from "axios";
import { setLocation } from "../actions";
import TruckCard from "../components/TruckCard";
import { GiFoodTruck } from "react-icons/gi";
import ReactMapGl, { Marker } from "react-map-gl";

import marker from "../images/marker.png";

const mapboxgl = require("mapbox-gl/dist/mapbox-gl.js");
console.log(mapboxgl);
const API_KEY =
  "pk.eyJ1Ijoic2Ftc2luMzY5IiwiYSI6ImNrbXh5NWhpcTAwejMydXBuNWx1bnY1a2QifQ.B7q4uR5veDmd3Bex4jJB0w";
const cuisineTypes = ["french", "mexican", "vietnamese"];

const distOptions = [10, 20, 30, 50, 100000];

const defaultCriteria = {
  cuisine_type: cuisineTypes[0],
  radSize: 30,
};

const Diner = (props) => {
  const [trucks, setTrucks] = useState([]);
  const [trucksNearby, setTrucksNearby] = useState([]);

  const [searchCriteria, setSearchCriteria] = useState(defaultCriteria);
  const [viewport, setViewport] = useState({
    latitude: Number(props.location.latitude),
    longitude: Number(props.location.longitude),
    zoom: 10,
    width: "100%",
    height: "500px",
  });
  console.log(trucks);
  const { getDistInKm, location, setLocation, capitalize } = props;

  const mapTrucksToCards = (trucks) => {
    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        {trucks.map((truck) => {
          return <TruckCard truck={truck} />;
        })}
      </div>
    );
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
  });

  useEffect(() => {
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

  useEffect(() => {
    console.log(props.location.latitude, props.location.longitude);
    console.log(trucks);
  }, [trucks, props.location]);
  return (
    <>
      <h1>Diner</h1>

      <div>
        <ReactMapGl
          {...viewport}
          mapboxApiAccessToken={API_KEY}
          mapStyle="mapbox://styles/samsin369/ckmy2nqmm1ecq17qh97ylapvf"
          onViewportChange={(viewport) => {
            setViewport(viewport);
          }}
        >
          <Marker latitude={location.latitude} longitude={location.longitude}>
            <>
              <h4>You Are Here</h4>
              <img src={marker} alt="you" />
            </>
          </Marker>
          {trucks.map((truck) => {
            return (
              <Marker
                key={truck.id}
                latitude={Number(truck.latitude)}
                longitude={Number(truck.longitude)}
              >
                <GiFoodTruck className="marker" />
              </Marker>
            );
          })}
        </ReactMapGl>
      </div>
      <div style={{ padding: "5em" }}>
        <h2>Favorite Trucks</h2>
        <div className="fav-trucks">{mapTrucksToCards(trucks)}</div>

        <Form className="form" onSubmit={handleSearch}>
          <h2>Trucks Nearby</h2>
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

          <Button variant="success" type="submit" style={{ margin: "1em 0" }}>
            Search
          </Button>
        </Form>
        <div className="nearby-trucks">{mapTrucksToCards(trucksNearby)}</div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  console.log("state To Props: ", state);
  return {
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
