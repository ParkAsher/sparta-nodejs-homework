const express = require("express");
const router = express.Router();

/* schemas */
const Comment = require("../schemas/comment.js");

// 댓글 생성
router.post("/comments", (req, res) => {
    let postNum = req.query.id;

    let body = {
        author: req.body.author,
        password: req.body.password,
        content: req.body.content
    }

    if (!postNum) {
        return res.status(400).json({ success: false, msg: "데이터 형식이 올바르지 않습니다." })
    }

    if (body.content === "" || !body.content) {
        return res.status(400).json({ success: false, msg: "댓글 내용을 입력해주세요." })
    }

    body.postNum = postNum;

    const postComment = new Comment(body);

    postComment.save().then(() => {
        return res.status(200).json({ success: true, msg: "댓글을 생성하였습니다." })
    }).catch((err) => {
        return res.status(200).json({ success: false, msg: "데이터 형식이 올바르지 않습니다." })
    })
})

// 댓글 목록 조회
router.get("/comments", (req, res) => {
    let postNum = req.query.id;

    if (!postNum) {
        return res.status(400).json({ success: false, msg: "데이터 형식이 올바르지 않습니다." })
    }

    Comment.find({}).sort({ createdAt: -1 }).exec().then((doc) => {
        res.status(200).json({ success: true, commentlist: doc })
    }).catch((err) => {
        res.status(400).json({ success: ture, msg: "데이터 형식이 올바르지 않습니다." })
    })
})

module.exports = router;