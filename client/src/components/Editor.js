import React, { useState } from 'react';
import axios from 'axios';

/* assets */
import { EditorContainer, EditorWrap } from '../assets/EditorStyle.js';

function Editor() {

    const [author, setAuthor] = useState("");
    const [password, setPassword] = useState("");
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    return (
        <EditorContainer>
            <EditorWrap>
                <div className='editor-header'>
                    <input id='author' type="text" placeholder="작성자" onChange={(e) => setAuthor(e.target.value)}></input>
                    <input id='password' type="text" placeholder="비밀번호" onChange={(e) => setPassword(e.target.value)}></input>
                </div>
                <div className='editor-body'>
                    <input id="title" type="text" placeholder="제목" onChange={(e) => setTitle(e.target.value)}></input>
                    <textarea rows='10' id='content' onChange={(e) => setContent(e.target.value)} placeholder="내용"></textarea>
                </div>
            </EditorWrap>
        </EditorContainer>
    );
}

export default Editor