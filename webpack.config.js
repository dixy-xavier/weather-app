const path = require('path');
const HWP = require('html-webpack-plugin');

module.exports = {
  devtool: process.env.mode === 'development' && 'source-map',
  entry: path.join(__dirname, '/src/index.js'),
  output: {
    filename: '[name].[contenthash].js',
    chunkFilename: '[name].[contenthash].chunk.js',
    path: path.join(__dirname, '/dist'),
  },
  watch: true,
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
    }, {
      test: /\.css$/,
      exclude: /index.css/,
      use: [{
        loader: 'style-loader'
      }, {
        loader: 'css-loader',
        options: {
          sourceMap: true,
          modules: {
            localIdentName: '[name]__[local]___[hash:base64:5]'
          }
        }
      }]
    }, {
      test: /index.css/,
      use: [{
        loader: 'style-loader'
      }, {
        loader: 'css-loader',
        options: {
          sourceMap: true
        }
      }]
    }, {
      test: /\.(md|ttf|txt|eot|ico|otf|svg|png|gif|woff2|woff|jpg|jpeg|webp|pdf|(2)?)(\?[a-z0-9]+)?$/,
      use: [
        { loader: 'file-loader' },
      ],
    },],
  },
  plugins: [
    new HWP(
      {
        template: path.join(__dirname, '/index.html'),
        hash: true
      },
    ),
  ],
};
