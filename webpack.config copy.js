'use strict'

const path = require('path')
const autoprefixer = require('autoprefixer')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require("copy-webpack-plugin");


module.exports = {
    // mode: 'development',
    mode: 'production',
    entry: {
        index: {
            import: './src/js/main.js',
            dependOn: 'shared',
        },
        shared: 'lodash',
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    optimization: {
        runtimeChunk: 'single',
    },
    devServer: {
        static: path.resolve(__dirname, 'dist'),
        port: 8080,
        hot: true
    },
    plugins: [
        new HtmlWebpackPlugin({ template: './src/index.html' }),
        new CopyPlugin({
            patterns: [
                { from: "src/assets", to: "assets" },

            ],
        }),
    ],
    module: {
        rules: [
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                use: [
                    'file-loader',
                ],
            },
            {
                test: /\.(scss)$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: [
                                    autoprefixer
                                ]
                            }
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            implementation: require('sass')
                        }
                    }
                ]
            }
        ]
    }
}