import React from "react";
import { Route, Redirect } from "react-router-dom";
import { setToken } from "../actions";
import { connect } from "react-redux";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { token, role } = rest;
  return (
    <Route
      {...rest}
      render={(props) => {
        return token && role ? (
          <Component {...props} />
        ) : (
          <Redirect to="/SignIn" />
        );
      }}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    token: state.token,
    role: state.role,
  };
};

export default connect(mapStateToProps, {})(PrivateRoute);
