const HWP = require('html-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  entry: path.join(__dirname, '/src/index.js'),
  output: {
    filename: '[name].[contenthash].js',
    chunkFilename: '[name].[contenthash].js',
    path: path.join(__dirname, '/dist'),
  },
  watch: true,
  optimization: {
    minimizer: [
      new TerserPlugin({}),
      new OptimizeCSSAssetsPlugin({}),
      new HWP({
        template: 'index.html',
        minify: {
          removeComments: true,
          collapseWhitespace: true,
          removeRedundantAttributes: true,
          useShortDoctype: true,
          removeEmptyAttributes: true,
          removeStyleLinkTypeAttributes: true,
          keepClosingSlash: true,
          minifyJS: true,
          minifyCSS: true,
          minifyURLs: true,
        },
        inject: true,
        chunksSortMode: 'dependency',
      }),
    ],
    runtimeChunk: true,
    removeEmptyChunks: true,
    removeAvailableModules: true,
    concatenateModules: true,
    splitChunks: {
      chunks: 'all',
      minChunks: 1,
    },
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
    }, {
      test: /\.css$/,
      exclude: /index.css/,
      use: [{
        loader: 'style-loader',
      }, {
        loader: 'css-loader',
        options: {
          sourceMap: true,
          modules: {
            localIdentName: '[name]__[local]___[hash:base64:5]',
          },
        },
      }],
    }, {
      test: /index.css/,
      use: [{
        loader: 'style-loader',
      }, {
        loader: 'css-loader',
        options: {
          sourceMap: true,
        },
      }],
    }, {
      test: /\.(md|ttf|txt|eot|ico|otf|svg|png|gif|woff2|woff|jpg|jpeg|webp|pdf|(2)?)(\?[a-z0-9]+)?$/,
      use: [{ loader: 'file-loader' }],
    }],
  },
  plugins: [
    new HWP(
      {
        template: path.join(__dirname, '/index.html'),
        hash: true,
      },
    ),
  ],
};
