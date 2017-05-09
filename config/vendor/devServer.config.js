var filePaths = require("../base/file.paths.js");
module.exports = {
  contentBase: filePaths.appBuild,
  host: "localhost",
  port: 8080, // 默认8080
  //inline: true, // 可以监控js变化
  hot: true, // 热启动
  compress: true,
  watchContentBase: false,
  publicPath: "/"
};
