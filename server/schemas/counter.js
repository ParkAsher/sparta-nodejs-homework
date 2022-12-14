const mongoose = require("mongoose");

const counterSchema = new mongoose.Schema({
    name: String,
    postNum: Number,
}, { collection: "counter" })

module.exports = mongoose.model("Counter", counterSchema);