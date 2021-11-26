const store = require("./store");
const socket = require("../../socket").socket;

function addMessage(user, message, chat, file) {
  return new Promise((resolve, reject) => {
    if (!chat || !user || !message) {
      console.error("[messageController] no hay un usuario o mensaje");
      reject("Los datos son incorrectos");
      return false;
    }
    let fileUrl = ''
    if (fileUrl) {
      fileUrl = 'http//localhost:3000/app/files/' + file.filename
    }
    const fullMessage = {
      chat,
      user,
      message,
      data: new Date(),
      file: fileUrl,
    };
    store.add(fullMessage);
    socket.io.emit("message", fullMessage)
    resolve(fullMessage)
  });
}

function getMessage(filterUser) {
  return new Promise((resolve, reject) => {
    resolve(store.get(filterUser));
  });
}

async function updateMessage() {
  return new Promise((resolve, reject) => {
    if (!id || !message) {
      reject("Invalid data");
      return false;
    }
    const result = store.updateText(id, message);
    resolve(result);
  });
}

async function deleteMessage() {
  if (!id) {
    reject("Id invalido");
    return false;
  }
  store
    .remove(id)
    .then(() => {
      resolve();
    })
    .catch((e) => {
      reject(e);
    });
}

module.exports = {
  addMessage,
  getMessage,
  updateMessage,
  deleteMessage
};
