"use strict";

const finalhandler = require('finalhandler');
const bodyParser   = require('body-parser');
const http         = require('http');
const Router       = require('router');

const router = Router();

let messages = [];

let nextId = 1;
class Message {
  constructor(message) {
    this.id = nextId;
    this.message = message;
    nextId++;
  }
}

// Use body parser to handle post data.
router.use(bodyParser.json());

router.get('/', (request, response) => {
  response.setHeader('Content-Type', 'text/plain; charset=utf-8');
  response.end('Hello, World!');
});

router.get('/messages', (request, response) => {
  response.setHeader('Content-Type', 'text/plain; charset=utf-8');
  response.end(JSON.stringify(messages));
});

router.post('/message', (request, response) => {
  let newMsg;

  response.setHeader('Content-Type', 'text/plain; charset=utf-8');

  if (!request.body.message) {
    response.statusCode = 400;
    response.statusMessage = 'No message provided.';
    response.end();
    return;
  }

  newMsg = new Message(request.body.message);
  messages.push(newMsg);

  response.end(JSON.stringify(newMsg.id));
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

