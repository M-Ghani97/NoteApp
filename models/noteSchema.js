var mongoose = require("mongoose");

var noteSchema = new mongoose.Schema({
    title: String,
    content: String,
    author: String
});

module.exports = mongoose.model("Note", noteSchema);