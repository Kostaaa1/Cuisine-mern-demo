import styled from "styled-components";

const Button = ({ value, onClick }) => {
    return <Btn onClick={onClick}> {value} </Btn>;
};

const Btn = styled.button`
    padding: 16px 35px;
    font-weight: bold;
    color: white;
    cursor: pointer;
    display: block;
    border: none;
    border-radius: 5px;
    letter-spacing: 1.2px;
    background-color: #ce4620;
`;

export default Button;
