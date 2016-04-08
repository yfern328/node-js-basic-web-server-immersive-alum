"use strict";

const finalhandler = require('finalhandler');
const bodyParser   = require('body-parser');
const http         = require('http');
const urlParser    = require('url');
const querystring  = require('querystring');
const crypto       = require('crypto');
const Router       = require('router');

const router = Router({ mergerParams: true });
const salt = "6X[TU:O(zVTR|qg|SYYD64W:<BqC~V/jHi]yN8Y!uym)+LMD9_p!yRM3EU*u$4Jp";

let messages = [];
let nextId = 1;

class Message {
  constructor(message) {
    this.id = nextId;
    this.message = message;
    nextId++;
  }
}

const encrypt = (txtInput) => {
  const cipher = crypto.createCipher('aes-256-ctr', salt);
  let encrypted = cipher.update(txtInput, 'utf8', 'hex');
  encrypted += cipher.final('hex');
  return encrypted; 
};

// Use body parser to handle post data.
router.use(bodyParser.json());

router.get('/', (request, response) => {
  response.setHeader('Content-Type', 'text/plain; charset=utf-8');
  response.end('Hello, World!');
});

router.get('/messages', (request, response) => {
  let url = urlParser.parse(request.url),
      params = querystring.parse(url.query);

  let result = JSON.stringify(messages);

  response.setHeader('Content-Type', 'text/plain; charset=utf-8');

  if (params.encrypt) {
    result = encrypt(result);
  }

  response.end(result);
});

router.get('/message/:id', (request, response) => {
  let url    = urlParser.parse(request.url),
      params = querystring.parse(url.query),
      result, found;

  response.setHeader('Content-Type', 'text/plain; charset=utf-8');

  if (!request.params.id) {
    response.statusCode = 400;
    response.statusMessage = "No message id provided.";
    response.end();
    return;
  }

  found = messages.find((message) => {
    return message.id == request.params.id;
  });

  if (!found) {
    response.statusCode = 404;
    response.statusMessage = `Unable to find a message with id ${request.params.id}`
    response.end();
    return;
  }

  result = JSON.stringify(found);

  if (params.encrypt) {
    result = encrypt(result);
  }

  response.end(result);
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

