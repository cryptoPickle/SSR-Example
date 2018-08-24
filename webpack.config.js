const webpackMerge = require("webpack-merge");

const config = {
  server: "server",
  client: "client"
};

const nodeEnv = {
  development: "dev",
  production: "prod"
};

const relation = process.env.RELATION;
const env = process.env.NODE_ENV;

const webpackConfig = require(`./webpack/${nodeEnv[env]}/webpack.${
  config[relation]
}`);

const envcommon = require(`./webpack/${nodeEnv[env]}/webpack.common`);
const rootCommon = require("./webpack/webpack.common");

module.exports = webpackMerge([rootCommon, envcommon, webpackConfig]);
