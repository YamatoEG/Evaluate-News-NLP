const path = require('path')
const webpack = require('webpack')
const HtmlWebPackPlugin = require("html-webpack-plugin")
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
//const WorkboxPlugin = require('workbox-webpack-plugin');

module.exports = {
    entry: './src/client/index.js',
    mode: 'development',
    devtool: 'source-map',
    stats: 'verbose',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                        options: {
                            esModule: false, // Important if you're working with non-ESM HTML files
                        }
                    }
                ]
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i, // Match image file extensions
                use: [{
                    loader: "file-loader", 
                    options: {
                        esModule: false, // Needed for certain cases with file-loader
                        name: 'images/[name].[contenthash].[ext]', // Output filename pattern
                    }
                }]
            },
        ]
    }, 
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/client/views/index.html",
            filename: "./index.html",
        }),
        new CleanWebpackPlugin({
            dry: true,
            verbose: true,
            cleanStaleWebpackAssets: true,
            protectWebpackAssets: false
        }),
       // new WorkboxPlugin.GenerateSW()
    ],
    devServer: {
        port: 3000,
        open: true, // Automatically open the browser
        hot: true,
        headers: { "Access-Control-Allow-Origin": "*" }
    }
}