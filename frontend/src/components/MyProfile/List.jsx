import React from "react";
import styled from "styled-components";
import { FaHeart, FaUtensilSpoon } from "react-icons/fa";
import { MdReviews } from "react-icons/md";

const List = ({ list }) => {
    const IconList = {
        FaHeart,
        FaUtensilSpoon,
        MdReviews,
    };
    const Svg = IconList[list.icon];

    return (
        <div>
            <Li className={list.selected ? "selected" : ""}>
                {list.icon && <Svg />}
                {list.text}
            </Li>
        </div>
    );
};

const Li = styled.li`
    width: 100%;
`;

export default List;
