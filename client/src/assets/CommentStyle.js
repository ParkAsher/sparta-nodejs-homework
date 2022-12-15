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

    @media (max-width: 1024px) {
        width: 100%;
    }
`;

export { CommentWrap, CommentInputWrap };