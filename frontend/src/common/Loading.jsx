import styled from "styled-components";
const Loading = () => {
    return <LoadingCircle></LoadingCircle>;
};

const LoadingCircle = styled.div`
    pointer-events: none;
    width: 2em;
    height: 2em;
    border: 0.15em solid transparent;
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
