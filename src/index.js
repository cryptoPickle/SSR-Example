import express from "express";
import renderer from "./utils/renderer";
import Home from "./client/components/Home";

const app = express();

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send(renderer(Home));
});

app.listen(3000, () => console.log("Listening 3000"));
