const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const mySchema = new Schema({
    user: {
        type: Schema.ObjectId,
        ref: `User`
    },
    message: {
        type: String,
        required: true
    }
});

const model = mongoose.model("User", mySchema);

model.exports = model;
