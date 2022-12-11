import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiChopsticks, GiNoodles } from "react-icons/gi";

const Category = () => {
    return (
        <>
            <List>
                <SLink to={"/cuisine/italian"}>
                    <FaPizzaSlice />
                    <h4>Italian</h4>
                </SLink>
                <SLinkR to={"/cuisine/american"}>
                    <FaHamburger />
                    <h4>American</h4>
                </SLinkR>
                <SLink to={"/cuisine/thai"}>
                    <GiNoodles />
                    <h4>Thai</h4>
                </SLink>
                <SLinkR to={"/cuisine/japanese"}>
                    <GiChopsticks />
                    <h4>Japanese</h4>
                </SLinkR>
            </List>
        </>
    );
};

const List = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;
`;

const SLink = styled(NavLink)`
    text-decoration: none;
    margin-right: 15px;
    border-radius: 50%;
    width: 6.6rem;
    height: 6.6rem;
    // background: linear-gradient(35deg, #494949, #313131);
    background: white;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    transform: scale(0.62);
    cursor: pointer;
    z-index: 1;
    transition: color 250ms ease-in-out;
    overflow: hidden;
    color: #333333;

    &::before {
        content: "";
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(to right, #f27121, #e94057);
        z-index: -1;
        transition: transform 250ms ease-in-out;
        transform: scaleX(0);
        transform-origin: left;
    }

    &:hover::before,
    &:focus::before {
        transform: scaleX(1);
    }

    h4 {
        // color: #494949;
        font-weight: bold;
        font-size: 1.2rem;
    }

    svg {
        // color: #494949;
        margin-bottom: 10px;
        font-size: 1.5rem;
    }

    &.active {
        background: linear-gradient(to right, #f27121, #e94057);
        color: white;
        pointer-events: none;
    }

    &:not(.active):hover,
    &:not(.active):focus {
        color: white;
    }
`;

const SLinkR = styled(NavLink)`
    text-decoration: none;
    margin-right: 15px;
    border-radius: 50%;
    width: 6.6rem;
    height: 6.6rem;
    // background: linear-gradient(35deg, #494949, #313131);
    background: white;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    transform: scale(0.62);
    cursor: pointer;
    z-index: 1;
    transition: color 250ms ease-in-out;
    overflow: hidden;
    color: #494949;

    &:hover,
    &:focus {
        color: white;
    }

    &::before {
        content: "";
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(to right, #f27121, #e94057);
        z-index: -1;
        transition: transform 250ms ease-in-out;
        transform: scaleX(0);
        transform-origin: right;
    }

    &:hover::before,
    &:focus::before {
        transform: scaleX(1);
    }

    h4 {
        font-weight: bold;
        font-size: 1.2rem;
    }

    svg {
        margin-bottom: 10px;
        font-size: 1.5rem;
    }

    &.active {
        color: white;
        background: linear-gradient(to right, #f27121, #e94057);
        pointer-events: none;
    }
`;

export default Category;
