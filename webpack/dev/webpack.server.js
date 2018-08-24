const path = require("path");
const nodeExternals = require("webpack-node-externals");

module.exports = {
  target: "node",
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "../../build")
  },
  externals: [nodeExternals()]
};
