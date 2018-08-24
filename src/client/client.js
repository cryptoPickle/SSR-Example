import "babel-polyfill";
import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import Routes from "./Routes";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./Redux";
import { renderRoutes } from "react-router-config";

const App = () => (
  <Provider store={store()}>
    <BrowserRouter>
      <Fragment>{renderRoutes(Routes)}</Fragment>
    </BrowserRouter>
  </Provider>
);

ReactDOM.hydrate(<App />, document.querySelector("#root"));
