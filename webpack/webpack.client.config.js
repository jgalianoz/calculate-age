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
        loader: ExtractTextPlugin.extract({
          loader: 'css-loader?modules!stylus-loader'
        }),
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css', '.styl'],
  },

  target: 'web',

  plugins: [
    new ExtractTextPlugin({
      filename: '../statics/style.css',
      allChunks: true,
    }),
  ]
};

module.exports = config;
