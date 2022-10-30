import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import styled from "styled-components"
import { motion } from "framer-motion"


const Cuisine = () => {
    
    const [cuisine, setCuisine] = useState([])
    const params = useParams()

    const getCuisine = async (query) => {
        const res = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${import.meta.env.VITE_API_ID}&app_key=${import.meta.env.VITE_API_KEY}`)
        const data = await res.json()

        setCuisine(data.hits)
    }

    useEffect(() => {
        getCuisine(params.type)
        // fetch('/api/getCuisine')
        //     .then(res => res.json())
        //     .then(data => console.log(data))
        //     .catch(err => console.log(err))
    }, [params.type])


    return (
        <Container>
            <h2>Our {params.type} picks:</h2>
            <Grid 
                animate={{opacity: 1}}
                initial={{opacity: 0}}
                exit={{ opacity: 0 }}
                transition={{duration: 0.5}}
            >
                {cuisine.map((x, id) => (
                    <Card key={id}>
                        <Link to={'/recipe/' + x.recipe.uri.slice(51)}>
                            <img src={x.recipe.image} alt="" />
                            <h4>{x.recipe.label}</h4>
                        </Link>
                    </Card>
                ))}
            </Grid>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    h2 {
        color: white;
        margin: 40px 0;
        width: fit-content:
    }
`

const Grid = styled(motion.div)`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(14rem, 1fr));
    grid-gap: 3rem;    
`

const Card = styled.div`
    img {
        width: 100%;
        border-radius: 2rem;
    }
    a {
        text-decoration: none;
    }
    h4 {
        text-align: center;
        padding: 1rem;
        color: white;
    }

`

export default Cuisine