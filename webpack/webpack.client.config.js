const webpack = require('webpack');
const path = require('path');


const config = {
  entry: './source/client.jsx',
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, '../built/statics'),
    publicPath: process.env.NODE_ENV === 'production'
      ? 'https://calculate-age-sfs.now.sh'
      : 'http://localhost:3001/',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: ['react'],
          env: {
            production: {
              presets: ['es2015'],
            },
            development: {
              plugins: ['transform-es2015-modules-commonjs'],
            },
          },
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  target: 'web',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      },
    }),
  ]
};

if (process.env.NODE_ENV === 'production') {
  config.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
      mangle: {
        except: ['$super', '$', 'exports', 'require'],
      },
    })
  );
}

module.exports = config;
