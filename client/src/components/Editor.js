import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

/* assets */
import { EditorContainer, EditorWrap } from '../assets/EditorStyle.js';

function Editor() {

    let navigate = useNavigate();

    const [author, setAuthor] = useState("");
    const [password, setPassword] = useState("");
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();

        if (author === "" || password === "" || title === "" || content === "") {
            return alert("모든 항목을 채워주세요!")
        }

        let body = {
            author: author,
            password: password,
            title: title,
            content: content
        }

        axios.post("/api/post/submit", body).then((res) => {
            if (res.data.success) {
                console.log("글 등록 성공!");
                navigate("/");
            }
        }).catch((err) => {
            console.log(err);
        })
    }

    return (
        <EditorContainer>
            <EditorWrap>
                <div className='editor-header'>
                    <input id='author' type="text" placeholder="작성자" onChange={(e) => setAuthor(e.target.value)}></input>
                    <input id='password' type="password" placeholder="비밀번호" onChange={(e) => setPassword(e.target.value)}></input>
                </div>
                <div className='editor-body'>
                    <input id="title" type="text" placeholder="제목" onChange={(e) => setTitle(e.target.value)}></input>
                    <textarea rows='10' id='content' onChange={(e) => setContent(e.target.value)} placeholder="내용"></textarea>
                </div>
                <div className='editor-btn'>
                    <button onClick={(e) => onSubmit(e)}>등록</button>
                </div>
            </EditorWrap>
        </EditorContainer>
    );
}

export default Editor