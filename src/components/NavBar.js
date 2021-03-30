import React from "react";
import { Navbar, NavDropdown, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import { GiFoodTruck } from "react-icons/gi";
const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">
        Food Trucks
        <GiFoodTruck size={30} />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <LinkContainer to="/">
            <Nav.Link>Home</Nav.Link>
          </LinkContainer>

          <LinkContainer to="/SignUpNewUser">
            <Nav.Link>Sign Up</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/SignIn">
            <Nav.Link>Sign In</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/CreateNewTruck">
            <Nav.Link>Create Truck</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/EditTruckForm">
            <Nav.Link>Edit Truck</Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
