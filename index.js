'use strict';

var debug = require('diagnostics')('pieces')
  , Reacts = require('reacts')
  , BigPipe = require('bigpipe')
  , path = require('path')
  , bigpipe, options, port;

//
// Setup options for BigPipe.
//
port = process.env.PORT || 8080;
options = {
  pagelets: path.join(__dirname, 'pagelets'),
  dist: path.join(__dirname, 'dist'),
  framework: Reacts
};

//
// Initialise the BigPipe server.
//
bigpipe = module.exports = BigPipe.createServer(port, options);

//
// Listen for errors and the listening event.
//
bigpipe.on('error', function error(err) {
  debug('Server received an error: %s', err.message);
});

bigpipe.once('listening', function listening() {
  debug('Server is running on %j', this._server.address());
});
