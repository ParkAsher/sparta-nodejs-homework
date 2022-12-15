import axios from 'axios';
import React, { useState } from 'react'

/* assets */
import { CommentInputWrap, CommentWrap } from '../assets/CommentStyle.js';

function Comment(props) {

    const [author, setAuthor] = useState("");
    const [password, setPassword] = useState("");
    const [content, setContent] = useState("");

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


    return (
        <>
            <CommentInputWrap>
                <div className='comment-input-header'>
                    <input id='author' type="text" placeholder="작성자" onChange={(e) => setAuthor(e.target.value)}></input>
                    <input id='password' type="password" placeholder="작성자" onChange={(e) => setPassword(e.target.value)}></input>
                </div>
                <div className='comment-input-body'>
                    <textarea rows='5' id='content' placeholder="내용" onChange={(e) => setContent(e.target.value)}></textarea>
                </div>
                <div className='comment-input-btn'>
                    <button onClick={(e) => onSubmit(e)}>등록</button>
                </div>
            </CommentInputWrap>
            <CommentWrap>
                {props.postNum}
            </CommentWrap>
        </>
    )
}

export default Comment