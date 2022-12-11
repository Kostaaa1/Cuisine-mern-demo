import { GiKnifeFork } from "react-icons/gi";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Search from "./components/Search";
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
        <div>
            <Nav>
                <Logo onClick={reload}>
                    <GiKnifeFork className="logo" /> Culinaryyy
                </Logo>
                {searchClick && <Search showSearched={showSearched} />}
                {!searchClick && (
                    <ul>
                        <li>
                            <FaSearch
                                className="search"
                                onClick={showSearched}
                            />
                        </li>
                        <li className="dropdown">
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
                        <li>About Us</li>
                        <li>Contact</li>
                        <li>Newsletter</li>
                    </ul>
                )}
            </Nav>
        </div>
    );
};

const Nav = styled.div`
    padding: 1.8rem 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    width: 100%;

    ul {
        display: flex;
        color: white;
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
        /* text-decoration: underline; */
        /* text-decoration-color: #ce4620; */
        /* text-underline-offset: 5px; */
        /* text-decoration-thickness: 10%; */

        .user {
            margin-right: 7px;
            color: #ce4620;
            width: 25px;
            height: 25px;
            background-color: white;
            border-radius: 50%;
        }
        .search {
            font-size: 1.3rem;
        }
    }

    .dropdown {
        position: relative;

        &:hover > div {
            visibility: visible;
        }
    }

    .logo {
        font-size: 2rem;
        color: white;
        margin-right: 14px;
    }
`;

const Logo = styled(Link)`
    text-decoration: none;
    font-size: 1.5rem;
    font-weight: 100;
    font-family: "Lobster two", cursive;
    color: white;
    font-style: italic;
    display: flex;
    justify-content: center;
`;

const Links = styled.div`
    visibility: hidden;

    .user__links {
        position: absolute;
        width: 230px;
        background: white;
        top: 100%;
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
