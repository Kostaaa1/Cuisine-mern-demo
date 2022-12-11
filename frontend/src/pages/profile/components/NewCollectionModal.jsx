import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useState } from "react";
import Button from "../../../common/Button";
import { Close, Lock } from "@material-ui/icons";
import { useEffect } from "react";

const NewCollection = ({ showModal }) => {
    const [collectionName, setCollectionName] = useState("");
    const [collectionDesc, setCollectionDesc] = useState("");
    const [collectionPrivate, setCollectionPrivate] = useState("");

    const submitCollection = (e) => {
        e.preventDefault();

        const collectionData = {
            collectionName,
            collectionDesc,
            collectionPrivate,
        };

        console.log(collectionData);
        showModal();
    };
    const handle = (e) => {
        if (e.key !== "Escape") return;
        showModal();
    };

    useEffect(() => {
        document.addEventListener("keydown", handle);
    }, []);

    return (
        <Modal
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            style={{ display: showModal }}
        >
            <Section>
                <div className="new__collection">
                    <div className="collection__header">
                        <h3>+ New collection</h3>
                        <Close onClick={showModal} />
                    </div>
                    <form onSubmit={submitCollection}>
                        <div>
                            <label>Collection Name</label>
                            <input
                                type="text"
                                placeholder="Give your collection a name"
                                onChange={(e) =>
                                    setCollectionName(e.target.value)
                                }
                            />
                        </div>
                        <div>
                            <label>Description (optional)</label>
                            <textarea
                                cols="30"
                                rows="6"
                                id="tagline"
                                type="text"
                                maxLength="300"
                                placeholder="Describe your collection"
                                onChange={(e) =>
                                    setCollectionDesc(e.target.value)
                                }
                            />
                            <span>{collectionDesc.length}/300 characters</span>
                        </div>
                        <div className="checkbox">
                            <div>
                                <label>
                                    Private Collection
                                    <Lock />
                                </label>
                                <input
                                    type="checkbox"
                                    className="check"
                                    defaultValue={false}
                                    onChange={(e) =>
                                        setCollectionPrivate(
                                            e.currentTarget.checked
                                        )
                                    }
                                />
                            </div>
                            <span>Only you can see a private collection</span>
                        </div>
                        <div className="button">
                            <p onClick={showModal}>Cancel</p>
                            <Button
                                type={"submit"}
                                value={"Create Collection"}
                            />
                        </div>
                    </form>
                </div>
            </Section>
        </Modal>
    );
};

const Modal = styled(motion.div)`
    position: fixed;
    content: "";
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.4);
    z-index: 10000;
`;

const Section = styled.div`
    background-color: white;
    width: 360px;
    height: 550px;

    .new__collection {
        display: flex;
        flex-direction: column;

        .collection__header {
            padding: 0 20px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 100%;
            height: 50px;
            color: white;
            background-color: #ce4620;

            svg {
                cursor: pointer;
            }
        }

        form > div {
            display: flex;
            flex-direction: column;
            padding: 0 20px;
            margin: 30px 0;
            font-size: 14px;

            label {
                font-weight: 600;
                margin-bottom: 10px;
            }

            input {
                width: 100%;
                height: 50px;
                padding: 0 10px;
            }

            textarea {
                padding: 15px 10px;
            }
            span {
                font-size: 10px;
                font-weight: 200;
                margin-top: 5px;
            }
        }
        .checkbox {
            display: flex;

            div {
                display: flex;
                flex-direction: row-reverse;
                justify-content: start;
                align-items: center;

                label {
                    margin: 0;
                    display: flex;
                    font-weight: 500;

                    svg {
                        margin-left: 5px;
                        font-size: 18px;
                    }
                }
            }

            span {
                font-size: 12px;
            }

            .check {
                width: 20px;
                height: 20px;
                margin-right: 10px;
                border-radius: 5px;
                cursor: pointer;

                &:focus {
                    border: 10px solid red;
                }
            }
        }

        .button {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-end;

            p {
                color: #ce4620;
                text-decoration: underline;
                cursor: pointer;
                margin-right: 15px;
            }
        }
    }
`;

export default NewCollection;
