const express = require("express");
const path = require("path");
const port = process.env.PORT || 5000

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.use(express.static(path.join(__dirname, "./client/build")));

/* routes */
app.use("/api", require("./server/routes/post.js"));
app.use("/api", require("./server/routes/comment.js"));

/* MongoDB Connect */
const connect = require("./server/schemas/index.js");
connect();

app.listen(port, () => {
    console.log(`App listening on Port ${port}`);
});

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
})

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
})


