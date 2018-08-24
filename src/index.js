import "babel-polyfill";
import express from "express";
import { matchRoutes } from "react-router-config";
import renderer from "./utils/renderer";
import Routes from "./client/Routes";
import createStore from "./utils/createStore";

const app = express();

app.use(express.static("public"));

app.get("*", (req, res) => {
  const store = createStore();

  const promises = matchRoutes(Routes, req.path).map(({ route }) => {
    return route.load ? route.load(store) : null;
  });

  Promise.all(promises).then(() => {
    res.send(renderer(Routes, req, store));
  });
});

app.listen(3000, () => console.log("Listening 3000"));
