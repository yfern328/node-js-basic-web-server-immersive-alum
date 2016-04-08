const finalhandler = require('finalhandler');
const http         = require('http');
const Router       = require('router');

const router = Router();

router.get('/', (request, response) => {
  response.setHeader('Content-Type', 'text/plain; charset=utf-8');
  response.end('Hello, World!');
});

this.server = http.createServer((request, response) => {
  router(request, response, finalhandler(request, response));
});

exports.listen = function(port) {
  this.server.listen.apply(this.server, arguments);
};

exports.close = function(callback) {
  this.server.close(callback);
};

