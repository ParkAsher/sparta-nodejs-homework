const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    postNum: {
        type: Number,
    },
    title: {
        type: String,
        required: true,
    },
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
}, { collection: "posts", timestamps: true })

module.exports = mongoose.model("Post", postSchema);