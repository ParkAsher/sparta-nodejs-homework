import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import moment from 'moment/moment';

/* components */
import Comment from './Comment.js';

/* assets */
import { DetailBtnWrap, DetailContainer, DetailPwInput, DetailWrap } from '../assets/DetailStyle.js';

function Detail() {

    const [postInfo, setPostInfo] = useState({});
    const [deleteFlag, setDeleteFlag] = useState(false);
    const [password, setPassword] = useState("");

    let params = useParams();

    const getPostDetail = () => {
        let postNum = params.postNum;

        axios.get("/api/posts/detail?id=" + postNum).then((res) => {
            if (res.data.success) {
                setPostInfo(res.data.postInfo);
            }
        }).catch((err) => {
            alert(err.response.data.msg)
        })
    }

    useEffect(() => {
        getPostDetail();
    })

    const setDate = (date) => {
        return moment(date).format("YYYY년 MM월 DD일, hh:mm");
    }

    const postDelete = () => {

        let postNum = params.postNum;

        if (deleteFlag === false) {
            setDeleteFlag(true);
            return;
        }

        if (password === "") {
            alert("비밀번호를 입력해주세요");
            return;
        }

        if (deleteFlag === true && password !== "") {

            axios.delete("/api/posts/delete?id=" + postNum + "&password=" + password).then((res) => {
                if (res.data.success) {
                    alert(res.data.msg);
                    window.location.href = "/";
                }
            }).catch((err) => {
                alert(err.response.data.msg)
            })
        }
    }

    return (
        <DetailContainer>
            <DetailWrap>
                <div className='detail-title-wrap'>
                    <p>{postInfo.title}</p>
                </div>
                <div className='detail-info-wrap'>
                    <p>{postInfo.author}</p>
                    <p>{setDate(postInfo.createdAt)}</p>
                </div>
                <div className='detail-content-wrap'>
                    <p>{postInfo.content}</p>
                </div>
            </DetailWrap>
            {deleteFlag ?
                <DetailPwInput>
                    <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="비밀번호"></input>
                </DetailPwInput>
                : ""
            }
            <DetailBtnWrap>
                <button className='btn-edit' onClick={() => window.location.href = `/edit/${postInfo.postNum}`}>수정</button>
                <button className='btn-delete' onClick={() => postDelete()}>삭제</button>
            </DetailBtnWrap>
            <Comment postNum={params.postNum} />
        </DetailContainer>
    )
}

export default Detail