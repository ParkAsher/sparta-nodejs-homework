import styled from 'styled-components';

const EditorContainer = styled.div`
    width: 100%;
    background-color: #ffffff;
    margin: 2rem 0;
`;

const EditorWrap = styled.div`
    width: 1024px;
    margin: 0 auto;
    border: 2px solid skyblue;
    border-radius: 10px;    
    box-sizing: border-box;

    .editor-header {
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

    .editor-body {
        display: flex;
        flex-direction: column;
        padding:  0.5rem 1rem;
        gap: 0.5rem;

        input {
            padding: 1rem;
            border: 1px solid skyblue;
            box-sizing: border-box;
        }
        textarea {
            padding: 1rem;
            resize: none;
            border: 1px solid skyblue;
            box-sizing: border-box;
            height: auto;
        }
    }

    @media (max-width: 1024px) {
        width: 100%;    
        
        .editor-header,
        .editor-body {
            padding: 0.75rem;

            input {
                width: 100%;
                padding: 0.75rem;
                margin-bottom: 0.25rem;
            }
            textarea {
                padding: 0.75rem;
            }
        }
    }
   
`;

export { EditorContainer, EditorWrap }; 