var http = require('http');
var messages = [];

var msgCount = 1;
function Message(message) {
  this.id = msgCount;
  this.message = message;
  msgCount++;
}

function requestHandler(request, response) {
  var method = request.method,
      result;

  console.log(request.url);

  if (method == 'POST') {
    var newMsg = new Message('hello there');
    messages.push(newMsg);
    console.log(newMsg.id);
    result = newMsg.id.toString();
  } else {
    result = JSON.stringify(messages);
  }

  response.end(result);
}

var server = http.createServer(requestHandler);

server.listen(8080);
