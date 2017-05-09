const filePaths = require("./base/file.paths");
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const moduleConfig = require('./inherit/module.config.js');

moduleConfig.rules.push({
  test: /\.css$/,
  exclude: /node_modules|bootstrap/,
  use: ExtractTextPlugin.extract([
    {
      loader: 'css-loader',
      options: {
        minimize: true,
        '-autoprefixer': true,
      },
    },
    {
      loader: 'postcss-loader',
    },
  ]),
});

moduleConfig.rules.push({
  test: /\.css$/,
  include: /bootstrap/,
  use: ExtractTextPlugin.extract([
    {
      loader: 'css-loader',
    },
  ]),
});

moduleConfig.rules.push({
  test: /\.less$/,
  include: filePaths.appRoot,
  use: ExtractTextPlugin.extract([
    {
      loader: 'css-loader',
      options: {
        minimize: true,
        '-autoprefixer': true,
      },
    },
    {
      loader: 'postcss-loader',
    },
    {
      loader: 'less-loader',
    },
  ]),
});

module.exports = moduleConfig;
