import "./App.css";
import SignUpForm from "./components/signUpForm";
import SignInForm from "./components/SignInForm";
import NavBar from "./components/NavBar";
import { Route, Switch, Redirect } from "react-router-dom";
import HomePage from "./components/HomePage";
import signUpForm from "./components/signUpForm";
import CreateTruckForm from "./components/CreateTruckForm";
import EditTruckForm from "./components/EditTruckForm";
function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/">
          <HomePage></HomePage>
        </Route>
        <Route path="/SignUpNewUser" component={SignUpForm}></Route>
        <Route path="/SignIn" component={SignInForm}></Route>
        <Route path="/CreateNewTruck" component={CreateTruckForm}></Route>
        <Route path="/EditTruckForm" component={EditTruckForm}></Route>
      </Switch>
    </div>
  );
}

export default App;
