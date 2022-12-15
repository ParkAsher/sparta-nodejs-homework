import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import moment from 'moment/moment';

/* assets */
import { DetailBtnWrap, DetailContainer, DetailPwInput, DetailWrap } from '../assets/DetailStyle.js';

function Detail() {

    const [postInfo, setPostInfo] = useState({});
    const [deleteFlag, setDeleteFlag] = useState(false);
    const [password, setPassword] = useState("");

    let params = useParams();

    const getPostDetail = () => {
        let postNum = params.postNum;

        axios.get("/api/post/detail?id=" + postNum).then((res) => {
            if (res.data.success) {
                setPostInfo(res.data.postInfo);
            }
        }).catch((err) => {
            console.log(err);
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

            axios.delete("/api/post/delete?id=" + postNum + "&password=" + password).then((res) => {
                if (res.data.success) {
                    alert(res.data.msg);
                    window.location.href = "/";
                } else {
                    alert(res.data.msg);
                    window.location.reload();
                }
            }).catch((err) => {
                console.log(err);
                alert("삭제에 실패했습니다.")
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
                <button className='btn-edit'>수정</button>
                <button className='btn-delete' onClick={() => postDelete()}>삭제</button>
            </DetailBtnWrap>
        </DetailContainer>
    )
}

export default Detail