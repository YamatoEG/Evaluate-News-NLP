const path = require('path')
const webpack = require('webpack')
const HtmlWebPackPlugin = require("html-webpack-plugin")
const MiniCssExtractorPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');


module.exports = {
    entry: './src/client/index.js',
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.scss$/,
                use: [ MiniCssExtractorPlugin.loader, 'css-loader', 'sass-loader' ]
        },{
            test: /.html$/,
            use:[
                {
                    loader: 'html-loader',
                    options:{
                        esModule:false,
                    }
                }
            ]
        }
        
        ,{
            test: /\.(png|jpe?g|gif|svg)$/i, // Match image file extensions
            use: [{
                
                loader :"file-loader",// 
                options: {
                    esModule:false,
                    name: 'images/[name].[contenthash].[ext]', // Output filename pattern
                    
                }, 

        }]
        },
        ]
    },
    plugins: [
        new MiniCssExtractorPlugin({
            filename: '[name].[contenthash].css'
        }),
        new HtmlWebPackPlugin({
            template: "./src/client/views/index.html",
            filename: "./index.html",
        }),
        new WorkboxPlugin.GenerateSW()
    ],
    optimization: {
        minimizer: [new TerserPlugin({}), new OptimizeCSSAssetsPlugin({})],
        },
    devServer: {
        port: 3000,
        allowedHosts: 'all'
    }
}
