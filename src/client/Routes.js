import React, { Fragment } from "react";
import { Route } from "react-router-dom";
import Home from "./components/Home";
import UsersList from "./components/UsersList";

export default () => (
  <Fragment>
    <Route exact path="/" component={Home} />
    <Route path="/users" component={UsersList} />
  </Fragment>
);
