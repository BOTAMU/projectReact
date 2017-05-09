var filePaths = require("./base/file.paths");
var entryConfig = {
	index: [
		"webpack-dev-server/client?http://localhost:8080",
		"webpack/hot/only-dev-server",
    	filePaths.appJs
	],
	vendor:["react","react-dom","react-router-dom"]
};
module.exports = entryConfig;