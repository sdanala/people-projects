'use strict';

var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var HtmlWebpackIncludeAssetsPlugin = require('html-webpack-include-assets-plugin');

var path = require('path');
var bourbon = require('node-bourbon').includePaths;
var neat = require('node-neat').includePaths;
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        app: ['./src/main.ts', './src/main.scss']
    },
    devtool: "#inline-source-map",
    stats: {warnings: false},
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        loaders: [
            {
                test: /\.ts$/,
                loader: 'ts-loader'
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader' // translates CSS into CommonJS
                        },
                        {
                            loader: 'sass-loader', // compiles Sass to CSS
                            options: {
                                includePaths: [].concat(neat) // Loads Bourbon Neat
                            }
                        }]
                })

            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                loader: 'url-loader'
            },
            {
                test: /[^\s]*[^index]\.html/,
                use: 'file-loader?name=views/[name].[ext]'
            }
        ],
        exprContextCritical: false
    },
    resolve: {
        modules: ['node_modules', __dirname + '/src'],
        extensions: ['.js', '.ts', '.scss']
    },


    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new HtmlWebpackIncludeAssetsPlugin({
            assets: [],
            append: false
        }),
        new ExtractTextPlugin('styles.bundle.css')
    ]
};
