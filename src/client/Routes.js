import React, { Fragment } from "react";
import { Route } from "react-router-dom";
import Home from "./components/Home";

export default () => (
  <Fragment>
    <Route exact path="/" component={Home} />
  </Fragment>
);
