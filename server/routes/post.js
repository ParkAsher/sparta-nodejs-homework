const express = require("express");
const router = express.Router();

/* schemas */
const Post = require("../schemas/post.js");
const Counter = require("../schemas/counter.js");

// 글 등록
router.post("/submit", async (req, res) => {

    let body = {
        author: req.body.author,
        password: req.body.password,
        title: req.body.title,
        content: req.body.content
    }

    // 글번호 counter
    const counter = await Counter.findOne({ name: "counter" });
    if (counter.length) {
        return res.status(400).json({ success: false });
    }

    body.postNum = counter.postNum;

    const blogPost = new Post(body);
    // 글 등록
    blogPost.save().then(() => {
        // 글 등록에 성공하면 counter에 글번호 + 1
        Counter.updateOne({ name: "counter" }, { $inc: { postNum: 1 } }).then(() => {
            return res.status(200).json({ success: true })
        })
    }).catch((err) => {
        return res.status(400).json({ success: false })
    })

})

module.exports = router;
