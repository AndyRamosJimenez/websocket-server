const express = require("express");
const message = require("../components/message/network");
const user = require("../components/user/network");
const chat = require("../components/chat/network")
function routes(server) {
  server.use("/message", message);
  server.use("/user", user);
  server.use("/chat", chat);
}

module.exports = routes;
