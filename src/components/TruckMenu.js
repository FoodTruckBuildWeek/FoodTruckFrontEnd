import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, Button } from "react-bootstrap";
import { connect } from "react-redux";
const TruckMenu = (props) => {
  const [truckMenu, setTruckMenu] = useState({});

  useEffect(() => {
    axios
      .get(`https://foodtruckbuildweek.herokuapp.com/api/menu/${1}`)
      .then((res) => {
        console.log(res);
        setTruckMenu(res.data);
      })
      .catch((err) => {
        console.log(err.response);
      });
  }, []);
  console.log(props.current_truck_id);
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={""} />
      <Card.Body>
        <Card.Title>{truckMenu.item_name}</Card.Title>
        <Card.Text></Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
};

const MapStateToProps = (state) => {
  return {
    current_truck_id: state.current_truck_id,
  };
};
export default connect(MapStateToProps, {})(TruckMenu);
