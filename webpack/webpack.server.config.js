const path = require('path');


const config = {
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
        exclude: /node_modules/,
        options: {
          presets: ['latest-minimal', 'react'],
        },
      },

    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  target: 'node',
  plugins: [

  ],
};

module.exports = config;
