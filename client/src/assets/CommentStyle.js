import styled from "styled-components"

const CommentInputWrap = styled.div`
    width: 1024px;
    margin: 1rem auto;
    border: 2px solid skyblue;
    border-radius: 10px;
    box-sizing: border-box;

    .comment-input-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        padding: 0.5rem 1rem;

        input {
            width: 47%;
            padding: 1rem;
            border: 1px solid skyblue;
            border-radius: 5px;
            box-sizing: border-box;
        }
    }

    .comment-input-body {
        display: flex;
        flex-direction: column;
        padding:  0.5rem 1rem;
        gap: 0.5rem;

        textarea {
            padding: 1rem;
            resize: none;
            border: 1px solid skyblue;
            box-sizing: border-box;
            height: auto;
        }
    }

    .comment-input-btn {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        padding: 0.5rem 1rem;

        button {
            border: 1px solid skyblue;
            background-color: skyblue;
            color: #ffffff;
            padding: 0.75rem 1rem;
            border-radius: 10px;
            box-sizing: border-box;
            font-weight: bold;
            cursor: pointer;
        }
    }

    @media (max-width: 1024px) {
        width: 100%;
    }
`;

const CommentWrap = styled.div`
    width: 1024px;
    margin: 1rem auto;
    border: 2px solid skyblue;
    border-radius: 10px;
    box-sizing: border-box;

    .comment-title-wrap,
    .comment-content-wrap,
    .comment-btn-wrap {
        padding: 1rem;
        p {
            margin: 0;
        }
    }

    .comment-title-wrap {
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
        gap: 0.5rem;
        align-items: center;

        p {
            font-weight: bold;
        }        
    }

    .comment-btn-wrap {
        display: flex;
        justify-content: flex-end;
        flex-wrap: wrap;
        gap: 0.5rem;
        align-items: center;

        button {
            padding: 0.75rem 1rem;
            font-weight: bold;
            color: #ffffff;
            box-sizing: border-box;
            border-radius: 10px;
            cursor: pointer;
        }
        .btn-edit {
            border: 1px solid skyblue;
            background-color: skyblue;
        }

        .btn-delete {
            border: 1px solid red;
            background-color: red;
        }
    }

    @media (max-width: 1024px) {
        width: 100%;

        .comment-title-wrap {
            p {
                font-size: 0.825rem;
            }
        }
    }
`;

export { CommentWrap, CommentInputWrap };