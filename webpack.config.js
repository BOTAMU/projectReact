module.exports = {
  entry: require("./config/entry.product"),
  output: require("./config/output"),
  module: require('./config/module.product.config'),
  resolve: require("./config/resolve.js"),
  plugins: require("./config/plugins.product"),
  externals: require('./config/externals')
};