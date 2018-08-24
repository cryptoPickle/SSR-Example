import express from "express";
import renderer from "./utils/renderer";
import Routes from "./client/Routes";
import createStore from "./utils/createStore";

const app = express();

app.use(express.static("public"));

app.get("*", (req, res) => {
  const store = createStore();
  res.send(renderer(Routes, req, store));
});

app.listen(3000, () => console.log("Listening 3000"));
