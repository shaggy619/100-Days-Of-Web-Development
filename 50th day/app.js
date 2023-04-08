const express = require("express");
const app = express();

const fs = require("fs");

const path = require("path");

app.set("views", path.join(__dirname, "view"));
app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));

app.get("/", function (request, response) {
  response.render("index");
});

app.get("/about", function (request, response) {
  response.render("about");
});

app.get("/confirm", function (request, response) {
  response.render("confirm");
});

app.get("/recommend", function (request, response) {
  response.render("recommend");
});

app.post("/recommend", function (request, response) {
  const restaurant = request.body;
  const filePath = path.join(__dirname, "data", "restaurants.json");
  const fileData = fs.readFileSync(filePath);
  const storedRestaurants = JSON.parse(fileData);
  storedRestaurants.push(restaurant);
  fs.writeFileSync(filePath, JSON.stringify(storedRestaurants));
  response.redirect("/confirm");
});

app.get("/restaurants", function (request, response) {
  const filePath = path.join(__dirname, "data", "restaurants.json");
  const fileData = fs.readFileSync(filePath);
  const storedRestaurants = JSON.parse(fileData);
  response.render("restaurants", {
    numberOfRestaurants: storedRestaurants.length,
    restaurants: storedRestaurants,
  });
});

app.listen(3002);
