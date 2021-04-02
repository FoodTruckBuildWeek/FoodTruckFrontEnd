import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, Button } from "react-bootstrap";
import { connect } from "react-redux";
import IMGSVG from "../images/menu.svg";
const TruckMenu = (props) => {
  const [truckMenu, setTruckMenu] = useState({});

  useEffect(() => {
    axios
      .get(
        `https://foodtruckbuildweek.herokuapp.com/api/menu/${props.current_truck_id}`
      )
      .then((res) => {
        console.log(res);
        setTruckMenu(res.data);
      })
      .catch((err) => {
        console.log(err.response);
      });
  }, [props.current_truck_id]);
  console.log(props.current_truck_id);
  return (
    <div className="cardContainer">
      <img src={IMGSVG} alt="foodTruck" className="menuImage"></img>
      <Card className="menuCard">
        <h1>Todays Menu</h1>
        <Card.Img variant="top" src={truckMenu.item_img} />
        <Card.Body>
          <Card.Title>{truckMenu.item_name}</Card.Title>
          <Card.Text>{truckMenu.item_description}</Card.Text>
          <Button variant="primary">Buy Now: {truckMenu.item_price}</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

const MapStateToProps = (state) => {
  return {
    current_truck_id: state.current_truck_id,
  };
};
export default connect(MapStateToProps, {})(TruckMenu);
