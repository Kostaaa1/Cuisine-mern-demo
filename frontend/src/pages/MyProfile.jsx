import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import List from "../components/MyProfile/List";

const MyProfile = ({ listContent, onClick, staticList }) => {
    return (
        <Container>
            <div className="profile">
                <div className="profile__greet">
                    <img src="/src/images/image1.png" alt="" />
                    <div>
                        <h3>Hi, Kosta Arsic</h3>
                        <NavLink className="btn">View Public Profile</NavLink>
                    </div>
                </div>
                <div className="profile__info">
                    <ul>
                        {listContent.map((list, id) => (
                            <CustomLink
                                to={"/account/profile" + list.route}
                                key={id}
                            >
                                <List
                                    className={list.selected ? "selected" : ""}
                                    list={list}
                                    onClick={onClick}
                                />
                            </CustomLink>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="components">
                {listContent.map((list, id) => {
                    if (list.selected) {
                        const Component = staticList[list.component];
                        return <Component key={list.id} />;
                    }
                })}
            </div>
        </Container>
    );
};

const CustomLink = styled(NavLink)`
    text-decoration: none;
    color: black;
`;

const Container = styled.div`
    min-height: 100vh;
    border-radius: 5px;
    width: 100%;
    background-color: #fffdfb;
    margin-top: 20px;
    padding: 60px 100px;
    display: flex;

    .components {
        width: 75%;
    }

    .profile {
        width: 25%;
        margin-right: 20px;
    }

    .profile__greet {
        display: flex;
        justify-content: flex-start;
        margin-bottom: 20px;

        img {
            margin: 12px;
            width: 60px;
            height: 60px;
        }

        h3 {
            margin: 10px 0;
            word-break: break-all;
        }

        .btn {
            color: black;
            text-decoration: none;
            padding: 0.4rem 0.9rem;
            outline: 2px solid #ce4620;
            font-weight: bold;
            border-radius: 5px;
            display: block;
            text-align: center;
            font-size: 14px;

            &:hover {
                background-color: #ce4620;
                color: white;
            }
        }

        svg {
            font-size: 5rem;
            color: #ce4620;
            margin-right: 10px;
        }
    }

    .profile__info {
        ul {
            display: flex;
            justify-content: center;
            flex-direction: column;
            width: 100%;
        }

        ul li {
            display: inline-flex;
            justify-content: flex-start;
            align-items: center;
            margin-right: 12px;
            list-style: none;
            padding: 0.9rem 0.4rem;
            border-bottom: 1px solid rgba(0, 0, 0, 0.2);
            cursor: pointer;
            padding-left: 12px;

            svg {
                color: #ce4620;
                margin-right: 10px;
                font-size: 16px;
            }

            &:hover:not(.selected) {
                background-color: rgba(0, 0, 0, 0.16);
                color: #ce4620;
            }
        }

        .selected {
            border-left: 3px solid #ce4620;
            border-top: 1px solid rgba(0, 0, 0, 0.3);
            font-weight: bold;
            color: #ce4620;
        }
    }
`;

export default MyProfile;
