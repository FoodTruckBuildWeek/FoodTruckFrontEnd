import "./App.css";
import SignUpForm from "./components/signUpForm";
import SignInForm from "./components/SignInForm";
import NavBar from "./components/NavBar";
import { Route, Switch, Redirect } from "react-router-dom";
import HomePage from "./components/HomePage";
import signUpForm from "./components/signUpForm";

import { Operator } from "./components/Operator";

import NewTruckForm from "./components/NewTruckForm";

import EditTruckForm from "./components/EditTruckForm";
import Diner from "./components/Diner";
import TruckMenu from "./components/TruckMenu";
import ConfirmPage from "./components/ConfirmPage";
function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/">
          <HomePage></HomePage>
        </Route>

        <Route path="/SignUpNewUser" component={SignUpForm}></Route>
        <Route path="/Diner" component={Diner}></Route>
        <Route path="/Operator" component={Operator}></Route>

        <Route path="/SignIn" component={SignInForm}></Route>

        <Route path="/NewTruckForm" component={NewTruckForm}></Route>
        <Route path="/EditTruckForm" component={EditTruckForm}></Route>
        <Route path="/TruckMenu" component={TruckMenu}></Route>
        <Route path="/confirm" component={ConfirmPage}></Route>
      </Switch>
    </div>
  );
}

export default App;
