const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');


const config = {
  entry: './source/client.jsx',
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, '../built/statics')
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: ['es2015', 'react'],
        },
      },
      {
        test: /\.styl$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader?modules', 'stylus-loader'],
        }),
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.styl', '.json'],
  },

  target: 'web',

  plugins: [
    new ExtractTextPlugin('../statics/styles.css')
  ]
};

module.exports = config;
