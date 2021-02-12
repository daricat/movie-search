const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const Dotenv = require('dotenv-webpack');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: 'development',
    entry: ["@babel/polyfill", './index.jsx'],
    output: {
      filename: '[name].[contenthash].js',
      path: path.resolve(__dirname, 'dist'),
    },
    devServer: {
        port: 3000
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    plugins: [
        new HtmlWebpackPlugin({template: './index.html'}),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].css',
        }),
        new CopyPlugin({
            patterns: [
              {
                from: path.resolve(__dirname, 'src/assets'),
                to: path.resolve(__dirname, 'dist/assets'),
              },
            ],
        }),
        new Dotenv({
          path: path.resolve(__dirname, './.env'),
        }),
    ],
    module: {
      rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                  loader: "babel-loader",
                  options: {
                    presets: ['@babel/preset-env']
                  }
                }
            },
            {
                test: /\.m?jsx$/,
                exclude: /node_modules/,
                use: {
                  loader: "babel-loader",
                  options: {
                    presets: ["@babel/preset-react", '@babel/preset-env']
                  }
                }
            },
            
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
              },
              {
                test: /\.less$/,
                use: [
                  "style-loader",
                  "css-loader",
                  "less-loader",
                ]
              },
              {
                test: /\.s[ac]ss$/,
                use: [
                  "style-loader",
                  "css-loader",
                  "sass-loader",
                ]
              },
              {
                test: /\.(png|jpg|svg|gif)$/,
                use: ['file-loader']
              },
              {
                test: /\.(ttf|woff|woff2|eot)$/,
                use: ['file-loader']
              },
        
        ]
    }
}