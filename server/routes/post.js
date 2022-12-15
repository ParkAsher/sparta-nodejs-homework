const express = require("express");
const router = express.Router();

/* schemas */
const Post = require("../schemas/post.js");
const Counter = require("../schemas/counter.js");

// 전체 게시글 목록 조회
router.get("/posts", async (req, res) => {
    Post.find({}).sort({ createdAt: -1 }).exec().then((doc) => {
        res.status(200).json({ success: true, postlist: doc })
    })
})

// 게시글 글 작성
router.post("/posts", async (req, res) => {

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
            return res.status(200).json({ success: true, msg: "게시글을 생성하였습니다." })
        })
    }).catch((err) => {
        return res.status(400).json({ success: false, msg: "데이터 형식이 올바르지 않습니다." })
    })

})

// 게시글 상세 조회
router.get("/posts/detail", async (req, res) => {
    let postNum = req.query.id;

    Post.findOne({ postNum: postNum }).exec().then((doc) => {
        res.status(200).json({ success: true, postInfo: doc })
    }).catch((err) => {
        res.status(400).json({ success: false, msg: "데이터 형식이 올바르지 않습니다." })
    })
})

// 게시글 글 삭제
router.delete("/posts/delete", async (req, res) => {
    let postNum = req.query.id;
    let password = req.query.password;

    if (!postNum || !password) {
        return res.status(400).json({ success: false, msg: "데이터 형식이 올바르지 않습니다." })
    }

    const post = await Post.findOne({ postNum: postNum });
    if (post.length) {
        return res.status(200).json({ success: false, msg: "게시글이 존재하지 않습니다." })
    }

    if (password !== post.password) {
        return res.status(200).json({ success: false, msg: "비밀번호가 일치하지 않습니다." })
    }

    Post.deleteOne({ postNum: postNum }).exec().then(() => {
        res.status(200).json({ success: true, msg: "삭제에 성공했습니다." })
    }).catch((err) => {
        res.status(400).json({ success: false, msg: "데이터 형식이 올바르지 않습니다." })
    });
})

// 게시글 글 수정
router.put("/posts/edit", async (req, res) => {
    let postNum = req.query.id;
    let password = req.query.password;

    let body = {
        author: req.body.author,
        title: req.body.title,
        content: req.body.title
    }

    if (body.content === "" || !body.content) {
        return res.status(400).json({ success: false, msg: "데이터 형식이 올바르지 않습니다." })
    }

    const post = await Post.findOne({ postNum: postNum });
    if (post.length) {
        return res.status(200).json({ success: false, msg: "게시글 조회에 실패하였습니다." })
    }

    if (password !== post.password) {
        return res.status(200).json({ success: false, msg: "비밀번호가 일치하지 않습니다." })
    }

    body.password = password;

    Post.updateOne({ postNum: postNum }, body).exec().then(() => {
        res.status(200).json({ success: true, msg: "수정에 성공했습니다." })
    }).catch((err) => {
        res.status(400).json({ success: false, msg: "데이터 형식이 올바르지 않습니다." })
    })

})

module.exports = router;
