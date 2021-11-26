const express = require("express");
const app = express();
const server = require("http").Server(app);

const bodyParser = require("body-parser");
const socket= require("./socket");
const response = require("./network/response");
const db = require("./db");

const router = require("./network/routes");

db(

);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

socket.connect(server)

router(app);

app.use("/app", express.static("public"));

server.listen(3000, function () {
  console.log("la aplicacion esta escuchando http://localhost:3000/");
});
