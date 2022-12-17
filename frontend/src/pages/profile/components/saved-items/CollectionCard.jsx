import { Add, Remove } from "@material-ui/icons";
import { useState } from "react";
import { useEffect } from "react";
import styled from "styled-components";
import ButtonBorder from "../../../../common/ButtonBorder";
import RemoveModal from "./RemoveModal";

const CollectionCard = ({ favorite, name, id }) => {
    const [showRemoveModal, setShowRemoveModal] = useState(false);

    const deleteFavorite = async () => {
        await fetch("/api/favorites", {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                id: id,
            }),
        });
        setShowRemoveModal(false);
    };

    const closeModal = () => {
        setShowRemoveModal(false);
    };

    return (
        <Card>
            <img src={favorite.image} alt="" />
            <div className="card__desc">
                <h4>{name}</h4>
                <ButtonBorder
                    value={
                        <span>
                            <Add /> Add to collection
                        </span>
                    }
                />
            </div>
            <Delete onClick={() => setShowRemoveModal(true)}>
                <Remove />
            </Delete>
            {showRemoveModal && (
                <RemoveModal
                    remove={() => deleteFavorite()}
                    name={name}
                    onClick={() => closeModal()}
                />
            )}
        </Card>
    );
};

const Card = styled.div`
    width: 32%;
    display: flex;
    flex-direction: column;
    min-height: 470px;
    position: relative;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.3);

    img {
        border-top-right-radius: 8px;
        border-top-left-radius: 8px;
        height: 270px;
    }

    .card__desc {
        padding: 1rem;
        height: 200px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        flex-wrap: wrap;

        h4 {
            text-align: start;
            color: var(--main-color);
            margin-bottom: 10px;
            margin-top: 5px;
            cursor: pointer;

            &:hover {
                text-decoration: underline;
                text-decoration-color: var(--main-color);
                text-underline-offset: 5px;
                text-decoration-thickness: 10%;
            }
        }

        span {
            display: flex;
            align-items: center;
            justify-content: center;

            svg {
                color: var(--red-color);
            }
        }

        /* .star__rating {
            display: flex;
            align-items: center;
            justify-content: center;

            span {
                color: var(--main-color);
                font-size: 14px;
                margin-left: 10px;
            }
            svg {
                font-size: 1.2rem;
                color: #ce4620;
            }
        } */
    }
`;

const Delete = styled.div`
    position: absolute;
    width: 35px;
    height: 35px;
    border-radius: 50%;
    background-color: #fff;
    right: -10px;
    top: -10px;
    border: 1px solid var(--red-color);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    svg {
        color: var(--red-color);
    }
`;
export default CollectionCard;
