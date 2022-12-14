const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
    author: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    }
}, { collection: "comments", timestamps: true });

module.exports = mongoose.model("Comment", commentSchema);