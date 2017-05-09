var webpack = require("webpack");

var Dashboard = require('webpack-dashboard');
var DashboardPlugin = require('webpack-dashboard/plugin');
var dashboard = new Dashboard();

var pluginsConfig = require("./inherit/plugins.config");

pluginsConfig.push(new DashboardPlugin(dashboard.setData));

pluginsConfig.push(new webpack.DefinePlugin({
  IS_PRODUCTION: false
}));

pluginsConfig.push(new webpack.LoaderOptionsPlugin({
  options: {
    postcss: require("./vendor/postcss.config"),
    eslint: require('./vendor/eslint.config.js'),
    devServer: require("./vendor/devServer.config")
  }
}));

/**
 * 开启全局的模块热替换（HMR）——如在package.json中加入--hot之后就不需要
 * new webpack.HotModuleReplacementPlugin()了，不然会报错：
 * Maximum call stack size exceeded
 */
//pluginsConfig.push(new webpack.HotModuleReplacementPlugin());
// 当模块热替换（HMR）时在浏览器控制台输出对用户更友好的模块名字信息
pluginsConfig.push(new webpack.NamedModulesPlugin());

module.exports = pluginsConfig;