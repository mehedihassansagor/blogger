import "./App.css";
import Home from "./components/Home/Home";
import AddEvent from "./components/AddEvent/AddEvent";
import ManageBlog from "./components/ManageBlog/ManageBlog";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Detail from "./components/Detail/Detail";
import Admin from "./components/Admin/Admin";
import { createContext, useState } from "react";
import Login from "./components/Login/Login/Login";

import PrivateRoute from "./components/Login/PrivateRoute/PrivateRoute";

export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value = {[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <PrivateRoute path="/addEvent">
            <AddEvent />
          </PrivateRoute>
          <Route path="/detail/:_id">
            <Detail />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute path="/manageBlog">
            <ManageBlog />
          </PrivateRoute>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
