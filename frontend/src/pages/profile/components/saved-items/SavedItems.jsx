import styled from "styled-components";
import { SupervisorAccount } from "@material-ui/icons";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import CollectionCard from "./CollectionCard";
import Button from "../../../../common/Button";
import {
    fetchSavedRecipes,
    fetchFavoriteRecipesLength,
} from "../../hooks/get-favorites";
import Return from "../../../../common/Return";
import { useNavigate } from "react-router-dom";
import SectionInfo from "../../../../common/SectionInfo";

const SavedItems = () => {
    const navigate = useNavigate();

    const { isLoading, data, isSuccess } = useQuery(
        ["favorite"],
        fetchSavedRecipes
    );

    const { data: length } = useQuery(
        ["favoriteLength"],
        fetchFavoriteRecipesLength
    );

    const returnBack = () => {
        navigate("/account/profile/collections");
    };

    return (
        <Saved>
            <Return value={"BACK TO ALL"} onClick={() => returnBack()} />
            <div className="section__info">
                <h1>All Saved Items</h1>
                <h3>All your favorite content in one place!</h3>
                <span>
                    <SupervisorAccount /> Other users see what you save
                </span>
            </div>

            <div className="line__break"></div>
            {length === 0 && (
                <section>
                    <h2>You haven't saved anything yet. Start browsing!</h2>
                    <p>
                        You can save items to your profile by clicking the heart
                        icon in the share bar.
                    </p>
                    <Button value={"BACK HOME"} onClick={returnBack} />
                </section>
            )}
            {length > 0 && <h3 className="length">{length} items</h3>}

            <div className="collection__control">
                {isSuccess &&
                    data.map((favorite) => (
                        <CollectionCard
                            key={favorite._id}
                            id={favorite._id}
                            favorite={favorite.data}
                            name={favorite.name}
                        />
                    ))}
            </div>
        </Saved>
    );
};

const Saved = styled.div`
    position: relative;
    h3 {
        font-size: 18px;
        font-weight: 400;
        line-height: 25px;
        margin: 20px;
    }

    section {
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        h2 {
            color: var(--grey-color);
        }

        p {
            margin: 20px 0 30px 0;
        }
    }

    .section__info {
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: space-around;
        height: 200px;

        h1 {
            margin-top: 50px;
        }

        span {
            font-weight: 200;
            display: flex;
            align-items: center;
            font-size: 14px;

            svg {
                margin-right: 10px;
            }
        }
    }

    .length {
        font-weight: 500;
        margin: 20px 0;
        padding: 5px 10px;
    }

    .line__break {
        width: 100%;
        height: 1px;
        margin: 25px 0 55px 0;
        background-color: rgba(0, 0, 0, 0.2);
    }

    .collection__control {
        display: flex;
        flex-wrap: wrap;
        gap: 18px;
        row-gap: 25px;
        padding: 5px 20px;
    }
`;

export default SavedItems;
