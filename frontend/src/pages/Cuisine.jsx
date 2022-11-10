import { useEffect, useState, useMemo } from "react"
import { useParams, Link } from "react-router-dom"
import styled from "styled-components"
import { motion } from "framer-motion"


const Cuisine = () => {
    
    const [cuisine, setCuisine] = useState([])
    const params = useParams()


    useEffect(() => {
        fetch(`/api/cuisine/${params.type}`)
            .then(res => res.json())
            .then(cuisine => setCuisine(cuisine[0].data.results))
            .catch(err => console.log(err))
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
                {cuisine.map(x => (
                    <Card key={x.id}>
                        <Link to={'/recipe/' + x.id}>
                            <img src={x.image} alt="" />
                            <h4>{x.title}</h4>
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
        width: max-width:
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