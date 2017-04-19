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
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader?modules', 'stylus-loader'],
        }),
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.styl'],
  },
  target: 'node',

  plugins: [
    new ExtractTextPlugin('../statics/styles.css')
  ],
};
