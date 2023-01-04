import styled from "styled-components";
import { SupervisorAccount } from "@material-ui/icons";
import { useContext, useEffect, useState } from "react";
import CollectionCard from "./CollectionCard";
import TransparentCard from "./TransparentCard";
import Button from "../../../../common/Button";
import Return from "../../../../common/Return";
import { useNavigate } from "react-router-dom";
import IndexesContext from "../../../../setup/app-context-menager/IndexesContext";
import { useFavorites } from "../../hooks/useFavorites";
import Loading from "../../../../common/Loading";

const SavedItems = () => {
    const navigate = useNavigate();
    const {
        data,
        isLoading,
        isSuccess,
        refetchOnLoad,
        length,
        isFetched,
        isFetching,
    } = useFavorites();

    const { arrayId, setArrayId } = useContext(IndexesContext);

    const addId = async (id) => {
        const arr = [...arrayId, id];
        setArrayId(arr);
    };

    const removeId = async (id) => {
        const arr = arrayId.filter((recipeId) => recipeId !== id);
        setArrayId(arr);
    };

    refetchOnLoad();

    return (
        <Saved>
            <Return
                value={"BACK TO ALL"}
                onClick={() => navigate("/account/profile/collections")}
            />
            {isFetching ? (
                <Loading margin={"110px 0 0 0"} />
            ) : (
                <>
                    <div className="section-info">
                        <h1>All Saved Items</h1>
                        <h3>All your favorite content in one place!</h3>
                        <span>
                            <SupervisorAccount /> Other users see what you save
                        </span>
                    </div>
                    <div className="line-break"></div>

                    {length === 0 && (
                        <section>
                            <h2>
                                You haven't saved anything yet. Start browsing!
                            </h2>
                            <p>
                                You can save items to your profile by clicking
                                the heart icon in the share bar.
                            </p>
                            <Button
                                value={"BACK HOME"}
                                onClick={() =>
                                    navigate("/account/profile/collections")
                                }
                            />
                        </section>
                    )}
                    {length > 0 && <h3 className="length">{length} items</h3>}
                    <div className="collection-control">
                        {isSuccess &&
                            data?.map((favorite, id) =>
                                arrayId.includes(favorite._id) ? (
                                    <TransparentCard
                                        key={id}
                                        favorite={favorite}
                                        removeId={removeId}
                                    />
                                ) : (
                                    <CollectionCard
                                        key={id}
                                        favorite={favorite}
                                        addId={addId}
                                    />
                                )
                            )}
                    </div>
                </>
            )}
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

    .section-info {
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

    .line-break {
        width: 100%;
        height: 1px;
        margin: 25px 0 30px 0;
        background-color: rgba(0, 0, 0, 0.2);
    }

    .collection-control {
        display: flex;
        flex-wrap: wrap;
        gap: 35px;
        row-gap: 40px;
        padding: 5px 20px;
    }
`;

export default SavedItems;
