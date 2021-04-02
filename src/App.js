import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage";
import PrivateRoute from "./components/PrivateRoute";

import SuccessPage from "./components/SuccessPage";

import SignUpForm from "./components/signUpForm";
import SignInForm from "./components/SignInForm";

import NewTruckForm from "./components/NewTruckForm";
import EditTruckForm from "./components/EditTruckForm";
import TruckMenu from "./components/TruckMenu";
import ConfirmPage from "./components/ConfirmPage";
import Diner from "./components/Diner";
import { Operator } from "./components/Operator";

import "./App.css";

function App(props) {
  const { role } = props;

  return (
    <div className="App">
      <NavBar />
      <Switch>
        <PrivateRoute
          exact
          path="/protected"
          component={role === "client" ? Diner : Operator}
        />
        <Route exact path="/">
          <HomePage></HomePage>
        </Route>
        <Route path="/SignUpNewUser" component={SignUpForm}></Route>
        <Route path="/SignIn" component={SignInForm}></Route>
        <Route path="/NewTruckForm" component={NewTruckForm}></Route>
        <Route path="/EditTruckForm">
          <EditTruckForm {...props} />
        </Route>
        <Route path="/TruckMenu" component={TruckMenu}></Route>
        <Route path="/confirm" component={ConfirmPage}></Route>
        <Route path="/success" component={SuccessPage}></Route>
      </Switch>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    role: state.role,
  };
};

export default connect(mapStateToProps, {})(App);
