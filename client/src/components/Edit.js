import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';

/* assets */
import { EditBtnWrap, EditContainer, EditPwInput, EditWrap } from '../assets/EditStyle'

function Edit() {

    let params = useParams();

    const [author, setAuthor] = useState("");
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const [password, setPassword] = useState("");

    const getPostDetail = () => {
        let postNum = params.postNum;

        axios.get("/api/post/detail?id=" + postNum).then((res) => {
            if (res.data.success) {
                setAuthor(res.data.postInfo.author);
                setTitle(res.data.postInfo.title);
                setContent(res.data.postInfo.content);
            }
        }).catch((err) => {
            console.log(err);
        })

    }

    const onEdit = (e) => {
        e.preventDefault();

        let postNum = params.postNum;

        if (author === "" || password === "" || title === "" || content === "") {
            return alert("모든 항목을 채워주세요!")
        }

        let body = {
            author: author,
            title: title,
            content: content
        }

        axios.put("/api/post/edit?id=" + postNum + "&password=" + password, body).then((res) => {
            if (res.data.success) {
                alert(res.data.msg);
                window.location.href = `/post/${postNum}`;
            } else {
                alert(res.data.msg);
            }
        }).catch((err) => {
            console.log(err);
        })
    }

    useEffect(() => {
        getPostDetail();
    }, [])

    return (
        <EditContainer>
            <EditWrap>
                <div className='editor-header'>
                    <input id='author' value={author} type="text" placeholder="작성자" onChange={(e) => setAuthor(e.target.value)}></input>
                </div>
                <div className='editor-body'>
                    <input id="title" value={title} type="text" placeholder="제목" onChange={(e) => setTitle(e.target.value)}></input>
                    <textarea rows='10' value={content} id='content' onChange={(e) => setContent(e.target.value)} placeholder="내용"></textarea>
                </div>
            </EditWrap>
            <EditPwInput>
                <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="비밀번호"></input>
            </EditPwInput>
            <EditBtnWrap>
                <button className='btn-edit' onClick={(e) => onEdit(e)}>수정</button>
            </EditBtnWrap>
        </EditContainer>
    )
}

export default Edit