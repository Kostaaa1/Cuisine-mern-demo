import { GiKnifeFork } from "react-icons/gi";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Search from "./components/Search";
import Category from "./components/Category";
import { useState } from "react";
import Dropdown from "./components/Dropdown";
import { ArrowDropDown, AccountCircle } from "@material-ui/icons";
import { FaUserCircle, FaSearch } from "react-icons/fa";
import { motion } from "framer-motion";

const Navbar = () => {
    const [searchClick, setSearchedClick] = useState(false);

    const showSearched = () => {
        setSearchedClick(!searchClick);
    };

    const reload = () => {
        window.location.href = window.location.origin;
    };

    return (
        <NavbarSection>
            <Nav>
                <Logo onClick={reload}>
                    Culinaryyy
                    <GiKnifeFork className="logo" />
                </Logo>
                {searchClick && <Search showSearched={showSearched} />}
                {!searchClick && (
                    <ul>
                        <li className="list">
                            <FaSearch
                                className="search"
                                onClick={showSearched}
                            />
                        </li>
                        <li className="dropdown list">
                            <FaUserCircle className="user" /> My account
                            <ArrowDropDown className="arrow" />
                            <Links>
                                <ul className="user__links">
                                    <NavLink to={"/account/profile"}>
                                        <li>My Profile</li>
                                    </NavLink>
                                    <NavLink
                                        to={"/account/profile/collections"}
                                    >
                                        <li>Saved Items & Collections</li>
                                    </NavLink>
                                    <NavLink to={"/account/addRecipe"}>
                                        <li>Add a Recipe</li>
                                    </NavLink>

                                    <div className="line__break"></div>

                                    <NavLink>
                                        <li>Help</li>{" "}
                                    </NavLink>
                                    <NavLink>
                                        <li>Log Out</li>{" "}
                                    </NavLink>
                                </ul>
                            </Links>
                        </li>
                        <li className="underline list">About Us</li>
                        <li className="underline list">Contact</li>
                        <li className="underline">Newsletter</li>
                    </ul>
                )}
            </Nav>
            <Category />
        </NavbarSection>
    );
};

const NavbarSection = styled.div`
    position: relative;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    width: 100%;
    padding: 0 280px;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.3);
    margin-top: 20px;
`;

const Nav = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;

    ul {
        display: flex;
        color: var(--main-color);
        font-size: 16px;
        font-weight: 400;
        width: 500px;
        align-items: center;
        justify-content: space-between;
    }

    ul li {
        list-style: none;
        display: flex;
        align-items: center;
        cursor: pointer;
        height: 50px;
        letter-spacing: -0.5px;

        .user {
            margin-right: 7px;
            color: var(--red-color);
            width: 25px;
            height: 25px;
            background-color: white;
            border-radius: 50%;
        }
    }

    .list {
        padding: 0 12px;
        height: 24px;
        border-right: 1px solid rgba(0, 0, 0, 0.15);
    }

    .underline:hover {
        text-decoration: underline;
        text-decoration-color: var(--red-color);
        text-underline-offset: 5px;
        text-decoration-thickness: 10%;
    }

    .dropdown {
        position: relative;

        &:hover > div {
            visibility: visible;
        }
    }
`;

const Logo = styled(Link)`
    text-decoration: none;
    font-size: 1.5rem;
    font-weight: 100;
    font-family: "Lobster two", cursive;
    color: #131111;
    font-style: italic;
    display: flex;
    justify-content: center;

    .logo {
        font-size: 1.8rem;
        color: var(--main-color);
        margin-left: 10px;
    }
`;

const Links = styled.div`
    visibility: hidden;

    .user__links {
        position: absolute;
        width: 230px;
        background: white;
        top: 100%;
        left: 85%;
        transform: translateX(-62%);
        z-index: 1000;
        max-height: 500px;
        flex-direction: column;
        color: black;
        padding: 8px 20px;
        font-weight: 500;
        border-radius: 3px;
        box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.3);

        li {
            margin: 2px 0;
            font-size: 14px;
        }

        .line__break {
            width: 100%;
            margin: 10px auto 15px auto;
            border: 1px solid rgba(0, 0, 0, 0.14);
        }
    }
`;

const NavLink = styled(Link)`
    text-decoration: none;
    color: black;
    width: 100%;

    &:hover {
        color: #6b6969;
    }
`;

export default Navbar;
