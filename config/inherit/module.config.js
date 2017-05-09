const filePaths = require("../base/file.paths");
var eslintFormatter = require('eslint-friendly-formatter');
module.exports = {
    rules: [
        {
          test: /\.js$/,
          enforce: 'pre',
          loader: 'eslint-loader',
          include: filePaths.appRoot,
          exclude: filePaths.appNodeModules,
          options: {
            formatter: eslintFormatter,
            fix: true,
          }
        },
        {
            test: /\.(js|jsx)$/,
            include: filePaths.appRoot,
            exclude: filePaths.appNodeModules,
            loader: 'babel-loader',
            options: {
                cacheDirectory: true
            },
        }, {
            test: /\.html$/,
            include: filePaths.appRoot,
            exclude: filePaths.appNodeModules,
            loader: 'html-loader',
        }, {
            test: /\.json$/,
            loader: 'json-loader'
        }, {
            // 图片加载器，雷同file-loader，更适合图片，可以将较小的图片转成base64，减少http请求
            // 如下配置，将小于8192byte的图片转成base64码
            test: /\.(gif|jpe?g|png|svg)$/i,
            include: filePaths.appRoot,
            exclude: filePaths.appNodeModules,
            loader: 'url-loader',
            options: {
                limit: 8192,
                name: './static/images/[hash].[ext]',
            },
        }, {
            test: /\.(woff|woff2|svg|eot|ttf)\??.*$/,
            include: filePaths.appRoot,
            exclude: filePaths.appNodeModules,
            loader: 'file-loader',
            options: {
                name: 'static/fonts/[name].[ext]',
            },
        }
    ],
};
