module.exports = {
    entry: require("./config/entry.dev"),
    output: require("./config/output"),
    devtool: 'inline-source-map',
    resolve: require("./config/resolve.js"),
    module: require('./config/module.dev.config'),
    plugins: require("./config/plugins.dev"),
    externals: require('./config/externals')
};
