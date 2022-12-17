import React from "react";
import styled from "styled-components";

const ButtonBorder = ({ value }) => {
    return <Button> {value} </Button>;
};

const Button = styled.div`
    color: var(--main-color);
    text-decoration: none;
    padding: 0.4rem 0.9rem;
    /* padding: 16px 35px; */
    outline: 1px solid #ce4620;
    font-weight: bold;
    border-radius: 3px;
    display: block;
    text-align: center;
    align-items: center;
    font-size: 14px;
    margin-top: 12px;
    max-width: 170px;
    cursor: pointer;

    &:hover {
        background-color: #ce4620;
        color: white;
    }
`;

export default ButtonBorder;
