import styled from "styled-components";
const Loading = ({ margin }) => {
    return (
        <Wrapper>
            <LoadingCircle style={{ margin: margin }}></LoadingCircle>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const LoadingCircle = styled.div`
    pointer-events: none;
    width: 3em;
    height: 3em;
    border: 0.25em solid white;
    border-top-color: #ce4620;
    border-radius: 50%;
    animation: spin 1.5s linear infinite;

    @keyframes spin {
        100% {
            transform: rotate(360deg);
        }
    }
`;

export default Loading;
