const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
    room:"String",
    user:"String",
    text:"String",
    timeStamp: {type: Date, default: Date.now}
});

const Message = mongoose.model("Message", messageSchema);

module.exports = Message;