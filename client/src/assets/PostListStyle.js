import styled from 'styled-components';

const PostlistContainer = styled.div`
    width: 100%;
    background-color: #ffffff;
    margin: 2rem 0;
`;

const PostlistWrap = styled.div`
    width: 1024px;
    margin: 0.5rem auto;
    border: 2px solid skyblue;
    border-radius: 10px;
    box-sizing: border-box;

    a {
        text-decoration: none;
    }

    &:hover {
        transform: scale(1.025);
    }

    .post-title-wrap {
        padding: 1rem;
        p {
            margin: 0;
            font-size: 2rem;
            font-weight: bold;
            color: #000000;
        }
    }

    .post-info-wrap {
        padding: 1rem;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        flex-wrap: wrap;
        gap: 0.5rem;

        p {
            margin: 0;
            font-size: 0.825rem;
            font-weight: bold;
            color: #000000;
        }
    }

    @media (max-width: 1024px) {
        width: 100%;

        .post-title-wrap {
            padding: 0.5rem;
            p {
                font-size: 1.25rem;
            }
        }
        .post-info-wrap {
            padding: 0.5rem;
        }

    }
`;

export { PostlistContainer, PostlistWrap };