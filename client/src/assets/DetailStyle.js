import styled from 'styled-components';

const DetailContainer = styled.div`
    width: 100%;
    background-color: #ffffff;
    margin: 2rem 0;
`;

const DetailWrap = styled.div`
    width: 1024px;
    margin: 0 auto;
    border: 2px solid skyblue;
    border-radius: 10px;
    box-sizing: border-box;

    p {
        margin: 0;
    }

    .detail-title-wrap,
    .detail-info-wrap,
    .detail-content-wrap {
        padding: 1rem;
    }

    .detail-title-wrap {
        border-bottom: 1px solid blue;
        p {
            font-size: 2rem;
            font-weight: bold;
            color: #000000;
        }
    }

    .detail-info-wrap {
        display: flex;
        justify-content: flex-end;
        gap: 0.5rem;
        align-items: center;

        p {
            font-size: 0.825rem;
            font-weight: bold;
            color: blueviolet;
        }
    }


    @media (max-width: 1024px) {
        width: 100%;        

        .detail-title-wrap {
            border-bottom: 1px solid blue;
            p {
                font-size: 1.25rem;
            }
        }

    }
`;

const DetailBtnWrap = styled.div`
    width: 1024px;
    margin: 1rem auto;

    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 0.5rem;

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

    @media (max-width: 1024px) {
        width: 100%;
    }
`;

const DetailPwInput = styled.div`
    width: 1024px;
    margin: 0.5rem auto;

    display: flex;
    justify-content: flex-end;
    align-items: center;

    input {
        padding: 1rem;
        border: 1px solid skyblue;
        box-sizing: border-box;
        border-radius: 10px;
    }

    @media (max-width: 1024px) {
        width: 100%;
    }
`;

export { DetailContainer, DetailWrap, DetailBtnWrap, DetailPwInput };