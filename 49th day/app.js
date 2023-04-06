const express = require("express");

const app = express();

const fs = require("fs");
const path = require("path");

app.use(express.urlencoded({ extended: false }));

app.get("/currenttime", function (request, response) {
  response.send("<h1>" + new Date() + "<h1>");
});

app.get("/", function (request, response) {
  response.send(
    "<form action = 'user-details' method = 'POST'><label>Enter Your Name: <br></label><input type = 'text' name = 'username'><button>Submit</button></form>"
  );
});

app.post("/user-details", function (request, response) {
  const userName = request.body.username; //Used to access the input using name attribute of input element.

  const filePath = path.join(__dirname, "data", "user-details.json"); //Sets the path of the folder and the file present in it.
  const fileData = fs.readFileSync(filePath);
  const existingUsers = JSON.parse(fileData); //parse is used to convert string into Javascript object.

  existingUsers.push(userName); //Push is used to append new item at the end of the element.
  fs.writeFileSync(filePath, JSON.stringify(existingUsers)); //stringfy is used to convert Javascritp object into string.
  response.send("<h1>Username Submitted!</h1>");
});

app.listen(3000);
