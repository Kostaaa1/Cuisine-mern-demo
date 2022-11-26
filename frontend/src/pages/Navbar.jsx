import { GiKnifeFork } from "react-icons/gi";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Search from "../components/Search";
import { useState } from "react";
import Dropdown from "../components/Dropdown";
import { ArrowDropDown, AccountCircle } from "@material-ui/icons";
import { FaUserCircle, FaSearch } from "react-icons/fa";

const Navbar = () => {
    const [dropdown, setDropdown] = useState(false);
    const [searchClick, setSearchedClick] = useState(false);

    const showSearched = () => {
        setSearchedClick(!searchClick);
    };

    return (
        <div>
            <Nav>
                <Logo to={"/"}>
                    {" "}
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
                        <li
                            onMouseEnter={() => setDropdown(true)}
                            onMouseLeave={() => setDropdown(false)}
                        >
                            <FaUserCircle className="user" /> My account
                            <ArrowDropDown className="arrow" />
                            {dropdown && <Dropdown />}
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

        &:hover {
            .user__links {
                display: flex;
            }
        }
    }

    .logo {
        font-size: 2rem;
        color: white;
        margin-right: 14px;
    }
`;

export default Navbar;
