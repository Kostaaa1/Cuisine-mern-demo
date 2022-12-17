import { GiKnifeFork } from "react-icons/gi";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Search from "./components/Search";
import Category from "./components/CategoryNavigation";
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
        <Header>
            <Nav>
                <Control>
                    <Logo onClick={reload}>
                        Culinaryyy
                        <GiKnifeFork className="logo" />
                    </Logo>
                    {searchClick && <Search showSearched={showSearched} />}
                    {!searchClick && (
                        <ul className="wrapper">
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
                </Control>
                <Category />
            </Nav>
        </Header>
    );
};

const Header = styled.header`
    position: relative;
    max-width: 100vw;
    box-shadow: 0 0.125rem 0.375rem rgb(0 0 0 / 15%);
    margin-top: 30px;
`;

const Control = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
`;

const Nav = styled.nav`
    display: flex;
    flex-direction: column;
    width: 1300px;
    margin: 0 auto;
    margin-bottom: 10px;

    .wrapper {
        display: flex;
        color: var(--main-color);
        font-size: 14px;
        font-weight: 400;
        width: 480px;
        align-items: center;
        justify-content: space-evenly;
    }

    ul li {
        list-style: none;
        display: flex;
        align-items: center;
        cursor: pointer;
        height: 50px;
        letter-spacing: -0.5px;
        /* outline: 1px solid black; */

        .user {
            margin-right: 7px;
            color: var(--red-color);
            width: 25px;
            height: 25px;
            background-color: white;
            border-radius: 50%;
        }

        .search {
            color: var(--grey-color);
            font-size: 1.1rem;
        }
    }

    .list {
        padding-right: 20px;
        /* padding: 0 16px 0 -10px; */
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
    font-weight: 600;
    font-family: "Lobster two", cursive;
    color: var(--main-color);
    font-style: italic;
    display: flex;
    justify-content: center;

    .logo {
        font-size: 1.8rem;
        color: var(--main-color);
        margin-left: 4px;
    }
`;

const Links = styled.div`
    visibility: hidden;

    .user__links {
        position: absolute;
        width: 230px;
        background: white;
        top: 100%;
        left: 0;
        transform: translateX(-5%);
        z-index: 10;
        flex-direction: column;
        color: black;
        padding: 8px 20px;
        font-weight: 500;
        border-radius: 3px;
        box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.3);
        max-height: 500px;

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
