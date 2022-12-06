import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";
import CardDescription from "../components/CardDescription";
import { useQuery } from "@tanstack/react-query";

const Searched = () => {
    const [favorite, setFavorite] = useState(false);
    let params = useParams();

    const fetchSearched = async () => {
        const res = await fetch(`/api/searched/${params.search}`);
        const data = await res.json();

        if (data.length === 0) {
            const res = await fetch(
                `https://api.spoonacular.com/recipes/complexSearch?apiKey=${
                    import.meta.env.VITE_API_KEY
                }&number=30&query=${params.search}`
            );
            const data = await res.json();
            console.log(data.results);

            if (data.results.length === 0) return [];

            fetch("/api/searched/createSearched", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ name: params.search, data: data }),
            });
        }

        return data[0].data.results ?? [];
    };

    const { isLoading, data, isSuccess } = useQuery(
        ["searched", params.search],
        fetchSearched
    );

    return (
        <Container>
            <h2>Our {params.search} recipes:</h2>
            <Grid
                animate={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
            >
                {isSuccess &&
                    data.map((searched) => (
                        <CardDescription key={searched.id} data={searched} />
                    ))}

                {isLoading && <h2 style={{ color: "white" }}>Loading...</h2>}
            </Grid>
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    flex-direction: column;

    h2 {
        color: white;
        margin: 40px 0;
    }
`;

const Grid = styled(motion.div)`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(18rem, 1fr));
    grid-gap: 2rem;
`;

const Card = styled.div`
    background-color: white;
    border-radius: 8px;
    height: 100%;
    position: relative;

    img {
        width: 100%;
        height: 60%;
        border-top-right-radius: 8px;
        border-top-left-radius: 8px;
    }

    a {
        text-decoration: none;
    }

    .favorite {
        position: absolute;
        top: 0;
        right: 10px;
        width: 50px;
        height: 50px;
        background-color: #ce4620;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 5px;
        cursor: pointer;
        transform: scale(0.9);

        svg {
            color: white;
        }
    }

    .card__desc {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 1rem;

        h4 {
            text-align: start;
            color: #1f1f1f;
            margin-bottom: 10px;
            margin-top: 5px;
            font-size: 1.3rem;
        }

        .star__rating {
            display: flex;
            align-items: center;
            justify-content: center;

            span {
                color: black;
                font-size: 14px;
                margin-left: 10px;
            }
            svg {
                font-size: 1.2rem;
                color: #ce4620;
            }
        }
    }

    &:hover {
        h4 {
            text-decoration: underline;
            text-decoration-color: #f27121;
            text-underline-offset: 5px;
            text-decoration-thickness: 8%;
        }
    }
`;

export default Searched;
