import { useEffect, useState } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { Link } from "react-router-dom";
import "@splidejs/react-splide/css";

const Veggie = () => {
    const [veggie, setVeggie] = useState([]);

    useEffect(() => {
        fetch("/api/getVeggie")
            .then((res) => res.json())
            .then((data) => {
                let arr = Array.from(
                    { length: 20 },
                    (x, y) =>
                        data.veggie.recipes[
                            Math.floor(
                                Math.random() * data.veggie.recipes.length
                            )
                        ]
                );
                setVeggie(arr.filter((x, i) => arr.indexOf(x) == i));
            })
            .catch((err) => console.log(err));
    }, []);

    return (
        <Wrapper>
            <h3>Our Vegan Picks:</h3>
            <Splide
                options={{
                    perPage: 4,
                    arrows: false,
                    pagination: false,
                    drag: "free",
                    gap: "2.5rem",
                    breakpoints: {
                        1024: {
                            perPage: 3,
                        },
                        767: {
                            perPage: 2,
                        },
                        640: {
                            perPage: 1,
                        },
                    },
                }}
            >
                {veggie.map((hit, id) => (
                    <SplideSlide key={id}>
                        <Link to={"/recipe/" + hit.id}>
                            <Card>
                                <p> {hit.title} </p>
                                <img src={hit.image} alt="" />
                                <Gradient />
                            </Card>
                        </Link>
                    </SplideSlide>
                ))}
            </Splide>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    margin: 4rem 0;

    h3 {
        color: white;
        margin-bottom: 20px;
    }
`;
const Card = styled.div`
    min-height: 15rem;
    position: relative;
    overflow: hidden;
    border-radius: 12px;

    img {
        position: absolute;
        width: 100%;
        height: 100%;
        border-radius: 12px;
        object-fit: cover;
        transition: all 0.5s 0s ease;
    }

    p {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 30%;
        left: 50%;
        transform: translate(-50%, 0);
        color: white;
        z-index: 10;
        text-align: center;
        font-weight: 600;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    &:hover {
        img {
            transform: scale(1.1);
        }
    }
`;

const Gradient = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 3;
    background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.6));
    border-radius: 12px;
`;

export default Veggie;
