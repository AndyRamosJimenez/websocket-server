const express = require("express");
const response = require("../../network/response");
const controller = require("./controller");

const router = express.Router();


router.post('/', function (req, res){
    controller
    .userList(req.params.id, req.body.message)
    .then((data) => {
      response.success(req, res, data, 200);
    })
    .catch((e) => {
      response.error(req, res, "Error interno", 500, e);
    });
})

module.exports = router