const express = require("express");
const app = express();

const path = require("path");

app.get("/", function (request, response) {
  const htmlFilePath = path.join(__dirname, "view", "index.html");
  response.sendFile(htmlFilePath);
});

app.get("/about", function (request, response) {
  const htmlFilePath = path.join(__dirname, "view", "about.html");
  response.sendFile(htmlFilePath);
});

app.get("/confirm", function (request, response) {
  const htmlFilePath = path.join(__dirname, "view", "confirm.html");
  response.sendFile(htmlFilePath);
});

app.get("/recommend", function (request, response) {
  const htmlFilePath = path.join(__dirname, "view", "recommend.html");
  response.sendFile(htmlFilePath);
});

app.get("/restaurants", function (request, response) {
  const htmlFilePath = path.join(__dirname, "view", "restaurants.html");
  response.sendFile(htmlFilePath);
});

app.listen(3000);
