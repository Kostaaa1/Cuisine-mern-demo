import { Check, Close } from "@material-ui/icons";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const SavedModal = () => {
    const [showModal, setShowModal] = useState("flex");

    const crossCloseModal = () => {
        setShowModal("none");
    };

    const closeModal = (e) => {
        if (
            e.target.className === "saved" ||
            e.target.className === "" ||
            e.target.tagName === "svg" ||
            e.target.tagName === "path"
        ) {
            null;
        } else {
            setShowModal("none");
        }
    };

    const handleEsc = (e) => {
        if (e.key !== "Escape") return;
        setShowModal("none");
    };

    useEffect(() => {
        document.addEventListener("keydown", handleEsc);
    }, []);

    return (
        <Modal
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            onClick={closeModal}
            style={{ display: showModal }}
        >
            <Section>
                <div className="close">
                    <Close onClick={crossCloseModal} />
                </div>
                <div className="saved">
                    <Check className="" />
                    <h2>Saved!</h2>
                    <p>
                        View{" "}
                        <Link to={"/account/profile/collections"}>
                            All Saved Items
                        </Link>
                    </p>
                </div>
            </Section>
        </Modal>
    );
};

const Link = styled(NavLink)`
    text-decoration: underline;
    text-decoration-color: #f27121;
    text-underline-offset: 5px;
    text-decoration-thickness: 9%;
    color: #616161;
`;

const Modal = styled(motion.div)`
    position: fixed;
    content: "";
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    /* display: flex; */
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.4);
    z-index: 10000;
`;

const Section = styled.div`
    display: flex;
    justify-content: end;

    .close {
        position: absolute;
        svg {
            cursor: pointer;
            color: #616161;
            font-size: 2.2rem;
        }
    }

    .saved {
        width: 350px;
        height: 620px;
        background-color: white;
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;

        svg {
            background-color: green;
            border-radius: 50%;
            color: white;
            font-size: 2rem;
            transform: scale(2);
        }

        h2 {
            color: black;
            margin: 40px 20px 20px 20px;
        }
    }
`;

export default SavedModal;
