const express = require("express");
const path = require("path");
const port = process.env.PORT || 5000

const app = express();

app.use(express.json());

/* MongoDB Connect */
const connect = require("./server/schemas/index.js");
connect();


app.listen(port, () => {
    console.log(`App listening on Port ${port}`);
});


