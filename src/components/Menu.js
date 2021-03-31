import axios from "axios";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { CardContainer } from "./TruckCard";
import { Card } from "react-bootstrap";

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

const Menu = (props) => {
  const { truck_id, capitalize } = props;
  const [menu, setMenu] = useState(menuitems);

  /*useEffect(() => {
    axios
      .get(`https://foodtruckbuildweek.herokuapp.com/api/menu`)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);*/

  return (
    <CardContainer>
      {menu ? (
        menu.map((item) => {
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
        })
      ) : (
        <div>Loading</div>
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
