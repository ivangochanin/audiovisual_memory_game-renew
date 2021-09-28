const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    entry: "./src/script.js",
    plugins: [
        new HtmlWebpackPlugin({
        template: "./src/index.html",
    }),
        new CopyPlugin({
            patterns: [
                { from: "src/assets", to: "assets" }
            ],
        })
    ],
    module: {
        rules: [
            {
                test: /\.scss$/i,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ],
            },
            {
                test: /\.html$/i,
                loader: "html-loader"
            },
            {
                test: /\.(svg|png|jpe?g|gif)$/i,
                use: {
                    loader: "file-loader",
                    options: {
                        name: "[name].[hash].[ext]"
                    }
                }
            }
        ],
    },
}

