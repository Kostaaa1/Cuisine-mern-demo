import React from "react";
import styled from "styled-components";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { AppsOutlined } from "@material-ui/icons";

const FavoriteCollection = () => {
    const [mockData, setMockData] = useState([
        {
            data: {
                image: "https://th.bing.com/th/id/R.72ad85d65b52a367ebb66f5466a8556b?rik=zeV%2bJ7Kb7lCNyA&riu=http%3a%2f%2fweknowyourdreams.com%2fimages%2fgrey%2fgrey-04.jpg&ehk=VFVujJ1Q0KhthB4cdQnwgljyetXvMgjem2gxDcUmkhE%3d&risl=&pid=ImgRaw&r=0",
            },
        },
        {
            data: {
                image: "https://th.bing.com/th/id/R.72ad85d65b52a367ebb66f5466a8556b?rik=zeV%2bJ7Kb7lCNyA&riu=http%3a%2f%2fweknowyourdreams.com%2fimages%2fgrey%2fgrey-04.jpg&ehk=VFVujJ1Q0KhthB4cdQnwgljyetXvMgjem2gxDcUmkhE%3d&risl=&pid=ImgRaw&r=0",
            },
        },
        {
            data: {
                image: "https://th.bing.com/th/id/R.72ad85d65b52a367ebb66f5466a8556b?rik=zeV%2bJ7Kb7lCNyA&riu=http%3a%2f%2fweknowyourdreams.com%2fimages%2fgrey%2fgrey-04.jpg&ehk=VFVujJ1Q0KhthB4cdQnwgljyetXvMgjem2gxDcUmkhE%3d&risl=&pid=ImgRaw&r=0",
            },
        },
        {
            data: {
                image: "https://th.bing.com/th/id/R.72ad85d65b52a367ebb66f5466a8556b?rik=zeV%2bJ7Kb7lCNyA&riu=http%3a%2f%2fweknowyourdreams.com%2fimages%2fgrey%2fgrey-04.jpg&ehk=VFVujJ1Q0KhthB4cdQnwgljyetXvMgjem2gxDcUmkhE%3d&risl=&pid=ImgRaw&r=0",
            },
        },
    ]);
    const [collectionLength, setCollectionLength] = useState(0);

    const fetchFavoriteRecipes = async () => {
        try {
            const res = await fetch("/api/favorites");
            const data = await res.json();

            console.log(data);
            const length = data.length;
            setCollectionLength(length);

            return mockData.map((x, i) => (data[i] ? data[i] : x));
        } catch (error) {
            console.log(error);
        }
    };

    const { isLoading, data, isSuccess } = useQuery(
        ["collection"],
        fetchFavoriteRecipes
    );

    return (
        <Collection>
            {isSuccess && (
                <>
                    <div className="collection__layout">
                        {data.map((recipe, id) => (
                            <img key={id} src={recipe.data.image} alt="" />
                        ))}
                    </div>
                    {isLoading && <h4>Loading...</h4>}
                    <div className="collection__description">
                        <p>PUBLIC</p>
                        <h3>All Saved Items</h3>
                        <span>
                            <AppsOutlined /> Collection // {collectionLength}
                        </span>
                    </div>
                </>
            )}
        </Collection>
    );
};

const Collection = styled.div`
    display: flex;
    flex-direction: column;
    width: 32%;
    font-size: 14px;

    border: 1px solid rgba(0, 0, 0, 0.2);

    .collection__description {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        height: 100%;
        padding: 20px 20px 16px 20px;

        span {
            display: flex;
            align-items: center;
            color: #595959;
        }
        p {
            letter-spacing: 1.4px;
            font-size: 12px;
            cursor: pointer;

            &:hover {
                text-decoration: underline;
                text-decoration-color: #ce4620;
                text-underline-offset: 5px;
                text-decoration-thickness: 10%;
            }
        }

        h3 {
            font-size: 18px;
            margin: 12px 0;
            cursor: pointer;

            &:hover {
                text-decoration: underline;
                text-decoration-color: #111;
                text-underline-offset: 5px;
                text-decoration-thickness: 10%;
            }
        }
    }

    .collection__layout {
        display: grid;
        grid-template: 1fr 1fr 1fr / 1fr 1fr 1fr;
        gap: 4px;
        width: 100%;

        img {
            width: 100%;
            height: 160px;
            background-color: grey;
        }

        img:first-child {
            grid-row: 1 / 3;
            grid-column: 1 / 4;
        }

        img:nth-child(n + 2) {
            height: 80px;
        }

        img:nth-child(2) {
            grid-row: 3 / 4;
            grid-column: 1 / 2;
        }
        img:nth-child(3) {
            grid-row: 3 / 4;
            grid-column: 2 / 3;
        }
        img:nth-child(4) {
            grid-row: 3 / 4;
            grid-column: 3 / 4;
        }
    }
`;

export default FavoriteCollection;
