const express = require("express");
const app = express();
const server = require("http").Server(app);

const bodyParser = require("body-parser");
const socket= require("./socket");
const response = require("./network/response");
const db = require("./db");

const router = require("./network/routes");

db(
  "mongodb+srv://m001-student:m001-mongodb-basics@sandbox.bmamo.mongodb.net/users?retryWrites=true&w=majority"
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

socket.connect(server)

router(app);

app.use("/app", express.static("public"));

server.listen(3000, function () {
  console.log("la aplicacion esta escuchando http://localhost:3000/");
});
