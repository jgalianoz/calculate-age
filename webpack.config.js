const server = require('./webpack/webpack.server.config.js');

module.exports = [
  server,
];

process.noDeprecation = true;
