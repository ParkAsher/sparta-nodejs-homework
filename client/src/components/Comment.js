import axios from 'axios';
import React, { useEffect, useState } from 'react'
import moment from 'moment/moment';

/* assets */
import { CommentInputWrap, CommentWrap } from '../assets/CommentStyle.js';

function Comment(props) {

    const [author, setAuthor] = useState("");
    const [password, setPassword] = useState("");
    const [content, setContent] = useState("");

    const [commentList, setCommentList] = useState([]);

    const [deleteCommentId, setDeleteCommentId] = useState("");
    const [deletePassword, setDeletePassword] = useState("");
    const [deleteFlag, setDeleteFlag] = useState(false);

    const onSubmit = (e) => {
        e.preventDefault();

        let postNum = props.postNum;

        if (author === "" || password === "" || content === "") {
            return alert("빈칸을 모두 채워주세요!");
        }

        let body = {
            author: author,
            password: password,
            content: content
        }

        axios.post("/api/comments?id=" + postNum, body).then((res) => {
            if (res.data.success) {
                alert(res.data.msg);
                window.location.reload();
            } else {
                alert(res.data.msg);
            }
        }).catch((err) => {
            console.log(err);
        })

    }

    const getCommentsList = () => {

        let postNum = props.postNum;

        axios.get("/api/comments?id=" + postNum).then((res) => {
            setCommentList([...res.data.commentlist])
        }).catch((err) => {
            console.log(err);
        })
    }

    const commentDelete = () => {

        let commentId = deleteCommentId;
        let password = deletePassword;

        if (deleteFlag === false) {
            setDeleteFlag(true);
            return;
        }

        if (password === "") {
            alert("비밀번호를 입력해주세요.");
            return;
        }

        if (deleteFlag === true && password !== "" && commentId != "") {

            axios.delete("/api/comments/delete?id=" + commentId + "&password=" + password).then((res) => {

            }).catch((err) => {
                alert(err.response.data.msg)
            })
        }
    }

    useEffect(() => {
        getCommentsList();
    }, [])

    const setDate = (date) => {
        return moment(date).format("YYYY년 MM월 DD일, HH:mm:ss");
    }


    return (
        <>
            <CommentInputWrap>
                <div className='comment-input-header'>
                    <input id='author' type="text" placeholder="작성자" onChange={(e) => setAuthor(e.target.value)}></input>
                    <input id='password' type="password" placeholder="비밀번호" onChange={(e) => setPassword(e.target.value)}></input>
                </div>
                <div className='comment-input-body'>
                    <textarea rows='5' id='content' placeholder="내용" onChange={(e) => setContent(e.target.value)}></textarea>
                </div>
                <div className='comment-input-btn'>
                    <button onClick={(e) => onSubmit(e)}>등록</button>
                </div>
            </CommentInputWrap>
            {
                commentList.map((comment, idx) => {
                    return (
                        <CommentWrap key={idx}>
                            <div className='comment-title-wrap'>
                                <p>{comment.author}</p>
                                <p>{setDate(comment.createdAt)}</p>
                            </div>
                            <div className='comment-content-wrap'>
                                <p>{comment.content}</p>
                            </div>
                            <div className='comment-btn-wrap'>
                                {
                                    deleteFlag && (deleteCommentId === comment._id) ?
                                        <input type="password" onChange={(e) => setDeletePassword(e.target.value)} placeholder="비밀번호"></input>
                                        : ""
                                }
                                <button className='btn-edit'>수정</button>
                                <button className='btn-delete' onClick={() => { commentDelete(); setDeleteCommentId(comment._id) }} >삭제</button>
                            </div>
                        </CommentWrap>
                    );
                })
            }
        </>
    )
}

export default Comment