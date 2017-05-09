const webpack = require("webpack");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const pluginsConfig = require("./inherit/plugins.config");

/* webpack1下，用了压缩插件会导致所有loader添加min配置，而autoprefixser也被定格到某个browers配置 */
pluginsConfig.push(new UglifyJsPlugin({
  compress: {
    warnings: false,
  },
}));

pluginsConfig.push(new webpack.DefinePlugin({
  IS_PRODUCTION: true,
}));

// 配合CLI的--bail，一出error就终止webpack的编译进程
pluginsConfig.push(new webpack.NoEmitOnErrorsPlugin());

pluginsConfig.push(new webpack.LoaderOptionsPlugin({
  options: {
    postcss: require("./vendor/postcss.config.js"),
    eslint: require('./vendor/eslint.config.js')
  },
}));

module.exports = pluginsConfig;