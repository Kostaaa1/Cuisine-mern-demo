import { useEffect, useState, useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";
import CardDescription from "../components/CardDescription";

const Cuisine = () => {
    const [cuisine, setCuisine] = useState([]);
    const [favorite, setFavorite] = useState(false);
    const params = useParams();

    useEffect(() => {
        fetch(`/api/cuisine/${params.type}`)
            .then((res) => res.json())
            .then((cuisine) => setCuisine(cuisine[0].data.results))
            .catch((err) => console.log(err));
    }, [params.type]);

    return (
        <Container>
            <h2>Our {params.type} picks:</h2>
            <Grid
                animate={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
            >
                {cuisine.map((data) => (
                    <CardDescription key={data.id} data={data} />
                ))}
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

export default Cuisine;
