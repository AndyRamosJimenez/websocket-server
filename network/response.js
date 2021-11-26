exports.success = function (req, res, message) {
  res.send({
    error: "",
    body: message,
  });
};

exports.error = function (req, res, message, details) {
  res.send({
    error: "",
    body: message,
  });
};
