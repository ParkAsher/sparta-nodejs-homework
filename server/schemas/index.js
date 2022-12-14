const mongoose = require("mongoose")

const connect = () => {
    mongoose.connect("mongodb+srv://asher:gusals8665@cluster0.rncujw4.mongodb.net/?retryWrites=true&w=majority").then(() => {
        console.log("MongoDB connection Success");
    }).catch((err) => {
        console.log(err);
    });
}

mongoose.connection.on("error", err => {
    console.error("MongoDB connect error", err);
});

module.exports = connect;