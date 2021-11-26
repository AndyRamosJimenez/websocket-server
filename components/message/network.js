const express = require("express");
const multer = require("multer");
const response = require("../../network/response");
const controller = require("./controller");
const router = express.Router();

const upload = multer({
  dest: "uploads/files/",
});

router.get("/", function (req, res) {
  const filterMessages = req.query.filter || null;
  controller
    .getMessage(filterMessages)
    .then((messageList) => {
      response.success(req, res, messageList, 2000);
    })
    .catch((e) => {
      response.error(req, res, "unexpected Error", 500, e);
    });
});

router.post("/", upload.single("file"), function (req, res) {
  console.log(req.file);
  controller.addMessage(req.body.chat, req.body.user, req.body.message, req.file );

  then((fullMessage) => {
    response.success(req, res, fullMessage, 201);
  }).catch((e) => {
    response.error(
      req,
      res,
      "informacion invalid",
      400,
      "error en el controlador"
    );
  });
  if (req.query.error == "ok") {
    response.error(req, res, "Error simulado", 500, "Es solo una simulacion");
  } else {
    response.success(req, res, "Creado correctamente", 201);
  }
  res.status(201).send([{ error: "", body: "Creado correactamente" }]);
});

router.patch("/:id", function (req, res) {
  controller
    .updateMessage(req.params.id, req.body.message)
    .then((data) => {
      response.success(req, res, data, 200);
    })
    .catch((e) => {
      response.error(req, res, "Error interno", 500, e);
    });
});

router.delete("/:id", function (req, res) {
  controller.deleteMessage(req.params.id),
    then(() => {
      response.success(req, res, `Usuario ${req.params.id} eliminado`, 200);
    }).catch((e) => {
      response.error(req, res, "Error interno", 500, e);
    });
});
module.exports = router;
