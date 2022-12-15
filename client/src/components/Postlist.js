import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment/moment';

/* assets */
import { PostBtnWrap, PostlistContainer, PostlistWrap } from '../assets/PostListStyle.js';

function Postlist() {

    const [postlist, setPostlist] = useState([]);

    const getPostlist = () => {

        axios.get("/api/posts").then((res) => {
            if (res.data.success) {
                setPostlist([...res.data.postlist]);
            }
        }).catch((err) => {
            console.log(err);
        });

    }

    useEffect(() => {
        getPostlist();
    })

    const setDate = (date) => {
        return moment(date).format("YYYY년 MM월 DD일, hh:mm");
    }

    return (
        <PostlistContainer>
            <PostBtnWrap>
                <button onClick={() => window.location.href = "/write"}>글쓰기</button>
            </PostBtnWrap>
            {postlist.map((post, idx) => {
                return (
                    <PostlistWrap key={idx}>
                        <Link to={`/post/${post.postNum}`}>
                            <div className='post-title-wrap'>
                                <p>{post.title}</p>
                            </div>
                            <div className='post-info-wrap'>
                                <p>{post.author}</p>
                                <p>{setDate(post.createdAt)}</p>
                            </div>
                        </Link>
                    </PostlistWrap>
                );
            })}
        </PostlistContainer>
    )
}

export default Postlist