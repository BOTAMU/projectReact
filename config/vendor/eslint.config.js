var path = require('path');
var filePaths = require("../base/file.paths");
module.exports = {
  configFile: path.resolve(filePaths.rootDir, './.eslintrc.js'),
  failOnWarning: true,
  failOnError: true,
  cache: true,
};
