"use strict";
var path = require('path');
module.exports = {
    entry: "./src/index.js",
    watch : true,
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: "bundle.js"
    },
    resolve: {
        extensions: [".js", ".html"]
    },
    module: {
        loaders: [
            {
                test: /\.html$/,
                exclude: /node_modules/,
                loader: "html-loader?exportAsEs6Default"
            }
        ]
    },
    node: {
        fs: "empty"
    }
};
