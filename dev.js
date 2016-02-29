var webpack = require('webpack');
var config = require('./webpack.config');
var DevServer = require('webpack-dev-server');

var server = new DevServer(webpack(config), {
  hot: true,
  publicPath: config.output.publicPath,
});

server.listen(5555, '0.0.0.0', function() {
  console.log('Listen webpack-dev-server on 5555');
});
