import styled from 'styled-components';

const HeaderContainer = styled.div`
    width: 100%;
    background-color: #ffffff;
    border-bottom: 2px solid skyblue;
`;

const HeaderWrap = styled.div`
    width: 1024px;
    margin: 0 auto;
    height: 5rem;

    display: flex;
    align-items: center;
    justify-content: center;

    a {
        text-decoration: none;
    }

    span {
        font-size: 3rem;
        font-weight: bold;
        color: skyblue;
    }

    @media (max-width: 1024px) {
        width: 768px;
    }
    @media (max-width: 768px) {
        width: 100%;
        padding: 0 1rem;
    }
`;

export { HeaderContainer, HeaderWrap };