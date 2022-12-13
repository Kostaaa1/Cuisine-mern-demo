import styled from "styled-components";

const Button = ({ value, onClick }) => {
    return (
        <BtnWrap>
            <Btn onClick={onClick}> {value} </Btn>
        </BtnWrap>
    );
};

const BtnWrap = styled.div`
    padding: 1px;
    &:active {
        outline: 2px solid #003e9b;
        border-radius: 5px;
        width: fit-content;
    }
`;

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
