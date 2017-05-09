'use strict';

var path = require("path");
var moduleExports = {};

moduleExports.rootDir = path.resolve(__dirname , "../../");
moduleExports.appRoot = path.resolve(moduleExports.rootDir , "app");
moduleExports.appRootCommons = path.resolve(moduleExports.appRoot , "commons");
moduleExports.appBuild = path.resolve(moduleExports.rootDir , "build");
moduleExports.appPublic = path.resolve(moduleExports.rootDir , "public");
moduleExports.appNodeModules = path.resolve(moduleExports.rootDir , "node_modules");
moduleExports.appJs = path.resolve(moduleExports.rootDir , "app/app.js");
moduleExports.appHtml = path.resolve(moduleExports.rootDir , "public/index.html");

module.exports = moduleExports;
