//GETTING STARTED WITH NODE.JS
//Creating own server with Node.Js
const http = require("http"); //require keyword is used to use built-in Node-JS packages.
//inside require we pass the name of the package we want to use as a parameter value.

function handleRequest(request, response) {
  if (request.url === "/currenttime") {
    response.statusCode = 200;
    response.end("<h1>" + new Date().toISOString() + "</h1>");
  } else {
    response.statusCode = 200;
    response.end("<h1>Hello World!</h1>");
  }
}
const server = http.createServer(handleRequest); //createServer keyword is used to create a server and we need to pass function name as a parameter value where we handle user requests.
server.listen(3000); //listen keyword is used to choose the port number which we want to use and we set port number inside it's parameter.
