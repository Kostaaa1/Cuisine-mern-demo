import styled from "styled-components";
import { Close, Lock } from "@material-ui/icons";
import { motion } from "framer-motion";
import Button from "../../../../common/Button";

const RemoveModal = ({ name, onClick, remove }) => {
    return (
        <Modal
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <Section>
                <div className="favorite__header">
                    <h3>Remove from All Saved Items</h3>
                    <Close onClick={onClick} />
                </div>
                <div className="content">
                    <p>
                        Are you sure? Removing <span> {name} </span> will
                        permanently delete it from all collections.
                    </p>
                    <div className="buttons__wrap">
                        <button className="btn__border" onClick={onClick}>
                            Cancel
                        </button>
                        <Button value={"Remove"} onClick={remove} />
                    </div>
                </div>
            </Section>
        </Modal>
    );
};

const Modal = styled(motion.div)`
    position: fixed;
    overflow: none;
    content: "";
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 10000;
`;

const Section = styled.div`
    background-color: white;
    width: 380px;
    min-height: 260px;

    .favorite__header {
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

    .content {
        padding: 0 20px;

        p {
            margin: 25px 0;
            line-height: 1.6rem;
            letter-spacing: 1px;
        }

        p > span {
            font-weight: bold;
        }

        .buttons__wrap {
            display: flex;
            align-items: center;
            justify-content: start;
            margin-bottom: 10px;

            .btn__border {
                color: var(--main-color);
                text-decoration: none;
                padding: 14px 35px;
                outline: 2px solid #ce4620;
                font-weight: bold;
                border-radius: 5px;
                display: block;
                text-align: center;
                align-items: center;
                font-size: 14px;
                letter-spacing: 1.1px;
                cursor: pointer;
                border: none;
                margin-right: 16px;

                &:hover {
                    background-color: #ce4620;
                    color: white;
                }
            }
        }
    }
`;

export default RemoveModal;
