const Model = require("./model");
const list = [];

function addMessage(message) {
  // list.push(message)
  const myMessage = new Model(message);
  myMessage.save();
}

async function getMessage(filterUser) {
  return new Promise((resolve, reject) => {
    let filter = {};
    if (filterUser !== null) {
      filter = { user: filterUser };
    }
    const messages = Model.find(filter)
      .populate("user")
      .exec((error, populate) => {
        if (error) {
          reject(error)
          return false
        }
        resolve(populate)
      });
    return messages;
  });
}

async function updateText(id, message) {
  console.log(id);
  console.log(message);
  const foundMessage = await Model.findOne({
    _id: id,
  });
  foundMessage = messages;

  const newMessage = foundMessage.save();
  return newMessage;
}

function removeMessage(id) {
  return Model.findOne({
    _id: id,
  });
}

module.exports = {
  add: addMessage,
  list: getMessage,
  updateText: updateText,
  remove: removeMessage,
};
