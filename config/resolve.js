var path = require("path");
var filePaths = require("./base/file.paths.js");
module.exports = {
    // 模块别名的配置，为了使用方便，一般来说所有模块都是要配置一下别名的
    alias: {
        react: path.resolve(filePaths.appNodeModules, "react/dist/react.min.js"),
        "react-dom": path.resolve(filePaths.appNodeModules, "react-dom/dist/react-dom.min.js"),
        "react-router-dom": path.resolve(filePaths.appNodeModules, "react-router-dom/umd/react-router-dom.min.js")
    },
    // 当require的模块找不到时，尝试添加这些后缀后进行寻找
    extensions: ['.js', '.json', '.jsx', '.less'],
};
