const db = require("mongoose");

// "mongodb+srv://m001-student:m001-mongodb-basics@sandbox.bmamo.mongodb.net/users?retryWrites=true&w=majority"

async function connect(url) {
  db.Promise = global.Promise;
  db.connect(url, { useNewUrlParser: true });
  console.log("[db] Conectada con exito");
}

module.exports = connect;