import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { GiFoodTruck } from "react-icons/gi";
import { setRole, setToken } from "../actions";
import { connect } from "react-redux";

const NavBar = (props) => {
  const { token, setToken, role } = props;

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    setToken(null);
    setRole(null);
  };

  return (
    <Navbar bg="light" expand="lg" className="bg-light">
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
          {token && (
            <LinkContainer to="/protected">
              <Nav.Link>{role === "client" ? "Diner" : "Operator"}</Nav.Link>
            </LinkContainer>
          )}
          {!token && (
            <>
              <LinkContainer to="/SignUpNewUser">
                <Nav.Link>Sign Up</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/SignIn">
                <Nav.Link>Sign In</Nav.Link>
              </LinkContainer>
            </>
          )}
          {!role === "client" ? (
            <>
              {" "}
              <LinkContainer to="/NewTruckForm">
                <Nav.Link>Create Truck</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/EditTruckForm">
                <Nav.Link>Edit Truck</Nav.Link>
              </LinkContainer>
            </>
          ) : null}
          {token && (
            <LinkContainer to="/SignIn">
              <Nav.Link onClick={logout}>Log Out</Nav.Link>
            </LinkContainer>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

const mapStateToProps = (state) => {
  return { token: state.token, role: state.role };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setToken: (token) => {
      dispatch(setToken(token));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
