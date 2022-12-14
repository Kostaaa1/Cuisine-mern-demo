import styled from "styled-components";
import { Link } from "react-router-dom";

const Dropdown = () => {
    return (
        <Links>
            <ul className="user__links">
                <NavLink to={"/account/profile"}>
                    <li>My Profile</li>
                </NavLink>
                <NavLink to={"/account/profile/collections"}>
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
    );
};

const Links = styled.div`
    .user__links {
        position: absolute;
        width: 240px;
        background: white;
        top: 75px;
        transform: translateX(-62%);
        z-index: 1000;
        max-height: 500px;
        flex-direction: column;
        color: black;
        padding: 8px 20px;
        font-weight: 500;
        border-radius: 3px;
        transition: opacity 150ms ease-in-out;

        li {
            margin: 2px 0;
            font-size: 16px;
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
        color: #8f8e8e;
    }
`;

export default Dropdown;
