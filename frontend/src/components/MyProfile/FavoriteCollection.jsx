import React from "react";
import styled from "styled-components";
import { useQuery } from "@tanstack/react-query";

const FavoriteCollection = () => {
    const fetchFavoriteRecipes = async () => {
        try {
            const res = await fetch("/api/favorites");
            const data = res.json();

            return data;
        } catch (error) {
            console.log(error);
        }
    };

    const { isLoading, data, isSuccess } = useQuery(
        ["collection"],
        fetchFavoriteRecipes
    );

    // console.log(data[0].data.image);

    return (
        <Collection>
            <div className="collection__layout">
                <div className="control">
                    <img src={data[0].data.image} alt="" />
                </div>
                <div className="control__flex">
                    {data.slice(1, 4).map((recipe, id, arr) => (
                        <img src={recipe.data.image} alt="" />
                    ))}
                </div>
            </div>
            {isLoading && <h4>Loading...</h4>}
        </Collection>
    );
};

const Collection = styled.div`
    width: 300px;
    height: 100%;
    margin-top: 30px;

    .collection__layout {
        display: flex;
        flex-direction: column;
        width: 300px;

        .control {
            img {
                width: 100%;
                margin-bottom: 4px;
            }
        }

        .control__flex {
            display: flex;
            flex-wrap: wrap;
            align-items: center;

            img {
                width: 33%;
                background-color: grey;

                &:nth-child(2) {
                    margin: 0 auto;
                }
            }
        }
    }
`;

export default FavoriteCollection;
