import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import CardDescription from "../../common/CardDescription";
import { motion } from "framer-motion";
import styled from "styled-components";

const Category = () => {
    const params = useParams();

    useEffect(() => {
        fetchCategorized();
    }, []);

    const fetchCategorized = async () => {
        const res = await fetch(`/api/category/${params.recipe}`);
        const data = await res.json();

        return data[0].data.results ?? [];
    };

    const { isLoading, data, isSuccess } = useQuery(
        ["searched", params.recipe],
        fetchCategorized
    );

    return (
        <div>
            <Container>
                <h2>Our {params.recipe} recipes:</h2>
                <Grid
                    animate={{ opacity: 1 }}
                    initial={{ opacity: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    {isSuccess &&
                        data.map((recipe) => (
                            <CardDescription key={recipe.id} data={recipe} />
                        ))}

                    {isLoading && (
                        <h2 style={{ color: "white" }}>Loading...</h2>
                    )}
                </Grid>
            </Container>
        </div>
    );
};

const Container = styled.div`
    display: flex;
    flex-direction: column;

    h2 {
        color: var(--main-color);
        margin: 40px 0;
    }
`;
const Grid = styled(motion.div)`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(18rem, 1fr));
    grid-gap: 2rem;
`;

export default Category;
