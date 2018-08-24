const CleanWebpackPlugin = require("clean-webpack-plugin");
const path = require("path");
module.exports = {
  plugins: [
    new CleanWebpackPlugin(["build", "public"], {
      root: path.resolve(__dirname, "../../")
    })
  ]
};
