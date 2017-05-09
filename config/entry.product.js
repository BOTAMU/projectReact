var filePaths = require("./base/file.paths.js");
var entryConfig = {
	index: filePaths.appJs,
	vendor:["react","react-dom","react-router-dom"]
};
module.exports = entryConfig;