const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = {
  entry: './source/server.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, '../built/server'),
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /(node_modules)/,
        options: {
          presets: ['latest-minimal', 'react'],
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
  target: 'node',

  plugins: [
    new ExtractTextPlugin({
      filename: '../statics/style.css',
      allChunks: true,
    }),
  ],
};
