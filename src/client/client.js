import React from "react";
import ReactDOM from "react-dom";
import Home from "./components/Home";

const App = () => <Home />;

ReactDOM.hydrate(<App />, document.querySelector("#root"));
