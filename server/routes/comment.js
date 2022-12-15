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
        return res.status(400).json({ success: false, msg: "데이터 형식이 올바르지 않습니다." })
    })
})

// 댓글 목록 조회
router.get("/comments", (req, res) => {
    let postNum = req.query.id;

    if (!postNum) {
        return res.status(400).json({ success: false, msg: "데이터 형식이 올바르지 않습니다." })
    }

    Comment.find({ postNum: postNum }).sort({ createdAt: -1 }).exec().then((doc) => {
        res.status(200).json({ success: true, commentlist: doc })
    }).catch((err) => {
        res.status(400).json({ success: false, msg: "데이터 형식이 올바르지 않습니다." })
    })
})

// 댓글 삭제
router.delete("/comments/delete", async (req, res) => {
    let commentId = req.query.id;
    let password = req.query.password;

    if (!commentId || !password) {
        return res.status(400).json({ success: false, msg: "데이터 형식이 올바르지 않습니다." })
    }

    const comment = await Comment.findOne({ _id: commentId });
    if (comment.length) {
        return res.status(400).json({ success: false, msg: "댓글 조회에 실패하였습니다." })
    }

    if (password !== comment.password) {
        return res.status(400).json({ success: false, msg: "비밀번호가 일치하지 않습니다." })
    }

    Comment.deleteOne({ _id: commentId }).exec().then(() => {
        res.status(200).json({ success: true, msg: "댓글을 삭제하였습니다." })
    }).catch((err) => {
        res.status(400).json({ success: false, msg: "삭제에 실패하였습니다." })
    })

})

// 댓글 수정
router.put("/comments/edit", async (req, res) => {
    let commentId = req.query.id;
    let password = req.query.password;

    let body = {
        author: req.body.author,
        content: req.body.content,
        postNum: req.body.postNum
    }

    if (!commentId || !password) {
        return res.status(400).json({ success: false, msg: "데이터 형식이 올바르지 않습니다." })
    }

    if (body.content === "" || !body.content) {
        return res.status(400).json({ success: false, msg: "댓글 내용을 입력해주세요." })
    }

    const comment = await Comment.findOne({ _id: commentId });
    if (comment.length) {
        return res.status(400).json({ success: false, msg: "댓글 조회에 실패하였습니다." })
    }

    if (password !== comment.password) {
        return res.status(400).json({ success: false, msg: "비밀번호가 일치하지 않습니다." })
    }

    body.password = password;

    Comment.updateOne({ _id: commentId }, body).exec().then(() => {
        res.status(200).json({ success: true, msg: "수정에 성공했습니다." })
    }).catch((err) => {
        res.status(400).json({ success: false, msg: "데이터 형식이 올바르지 않습니다." })
    })

})

module.exports = router;