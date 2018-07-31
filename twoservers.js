// We require/import the HTTP module
var http = require("http");

var PORTONE = 7000;
var PORTTWO = 7500;


function handleRequestOne(request, response) {
  response.end("You are a handsome son of a bitch!");
}

function handleRequestTwo(request, response) {
  response.end("You smell like a foot!");
}

var serverOne = http.createServer(handleRequestOne);
var serverTwo = http.createServer(handleRequestTwo);


serverOne.listen(PORTONE, function() {


  console.log("Server listening on: http://localhost:%s", PORTONE);
});

serverTwo.listen(PORTTWO, function() {


  console.log("Server listening on: http://localhost:%s", PORTTWO);
});