import axios from "axios";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { CardContainer } from "./TruckCard";
import { Card } from "react-bootstrap";
import Loading from "./Loading";

const Menu = (props) => {
  const { truck_id, capitalize } = props;
  const [menuItem, setMenuItem] = useState(null);

  useEffect(() => {
    axios
      .get(`https://foodtruckbuildweek.herokuapp.com/api/menu/${truck_id}`)
      .then((res) => {
        console.log(res);
        setMenuItem(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [truck_id]);

  return (
    <CardContainer>
      {menuItem ? (
        <Card style={{ width: "8rem", margin: "1em" }}>
          <Card.Img variant="top" src={menuItem.item_img} />
          <Card.Body>
            <Card.Title>{capitalize(menuItem.item_name)}</Card.Title>
            <div style={{ textAlign: "left", marginBottom: "1em" }}>
              {menuItem.item_description}
            </div>
            <div style={{ textAlign: "left" }}>
              Item Price: {`$${menuItem.item_price}`}
            </div>
          </Card.Body>
        </Card>
      ) : (
        <Loading />
      )}
    </CardContainer>
  );
};

const mapStateToProps = (state) => {
  return {
    capitalize: state.capitalize,
  };
};

export default connect(mapStateToProps, {})(Menu);
