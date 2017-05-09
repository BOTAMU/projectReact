const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const filePaths = require("../base/file.paths");

const configPlugins = [
    /* 全局声明 */
    new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "window.$": "jquery",
        "window.jQuery": "jquery"
    }),
    /* 抽取出所有通用的部分 */
    new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor', // 需要注意的是，chunk的name不能相同！！！
        filename: 'commons/vendor.js',
        minChunks: Infinity,
    }),
    /* 抽取出chunk的css */
    new ExtractTextPlugin({
        //提取出来后的CSS文件名叫index.css,并放在css文件夹内
        filename: "index.css",
        //从所有附加模块中抽取：ExtractTextPlugin.extract({})
        allChunks: true
    }),
    //生成一个新的HTML文件处理
    new HtmlWebpackPlugin({
        //1、html文件标题
        title: "React Demo",
        //2、根据指定的模板文件来生成index.html文件
        template: filePaths.appHtml,
        //3、生成后的HTML文件名叫index.html,并放在packing文件夹内
        filename: path.resolve(filePaths.appBuild, "./index.html"),
        //4、inject的作用是将script标签放在html文件的body底部
        inject: "body",
        //5、favicon的作用是给生成后的html文件生成一个图标,属性值是favicon文件所在的路径名
        favicon: path.resolve(filePaths.appPublic, "./favicon.ico"),
        //6、是否对html文件进行压缩
        minify: false,
        //7、是否给生成的css、js文件一个独特的hash值
        hash: true,
        //8、cache的作用是,只有在内容变化时才生成一个新的文件,默认值为true
        cache: true,
        chunks: ["index", "vendor"],
        // //按照不同文件的依赖关系来排序。
        chunksSortMode: "dependency"
    })
];

module.exports = configPlugins;
