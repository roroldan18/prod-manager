const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');


module.exports = {
    entry: './src/index.tsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    },
    mode:'production',
    performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
    },
    resolve: {
        extensions: ['.js', '.ts', '.tsx'],
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx|tsx|ts)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }

            },
            {
                test: /\.(png|ico)/,
                type: '/public'
            },
            {
                test: /\.html%/,
                use: [
                    { loader: 'html-loader' }
                ]
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ] 
            }


        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            "process.env.SERVER_HOST": JSON.stringify("http://ec2-3-69-38-56.eu-central-1.compute.amazonaws.com"),
            "process.env.SERVER_PORT": JSON.stringify("8081"),
            "process.env.SERVER_PRODUCTS_ENDPOINT": JSON.stringify("/products"),
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: './index.html',
            favicon: "./public/favicon.ico"
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css'
        }),
        new CleanWebpackPlugin(),
    ],
    optimization:{
        minimize: true,
        minimizer:[
            new CssMinimizerPlugin(),
            new TerserPlugin(),
        ]
    },
    devServer: {
        historyApiFallback: true,
    },
}
