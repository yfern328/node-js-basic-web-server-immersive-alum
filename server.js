var finalhandler = require('finalhandler');
var http         = require('http');
var Router       = require('router');

var router = Router();
router.get('/', function (req, res) {
  res.setHeader('Content-Type', 'text/plain; charset=utf-8');
  res.end('Hello, World!');
});

this.server = http.createServer(function(req, res) {
  router(req, res, finalhandler(req, res));
});

exports.listen = function(port) {
  this.server.listen.apply(this.server, arguments);
};

exports.close = function(callback) {
  this.server.close(callback);
};

