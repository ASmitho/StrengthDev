import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import NotFound from "./containers/NotFound";
import Login from "./containers/Login";
import Signup from "./containers/Signup";
import AppliedRoute from "./components/AppliedRoute";
import Welcome from "./containers/Welcome";
import Dashboard from "./containers/Dashboard";

export default () =>
  <Switch>
    <AppliedRoute path="/" exact component={Home}  />
    <AppliedRoute path="/login" exact component={Login} />
    <AppliedRoute path="/signup" exact component={Signup} />
    <AppliedRoute path="/welcome" exact component={Welcome}  />
    <AppliedRoute path="/dashboard" exact component={Dashboard}  />
    { /* Finally, catch all unmatched routes */ }
    <Route component={NotFound} />
  </Switch>;