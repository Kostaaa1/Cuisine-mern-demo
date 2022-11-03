import {useState, useEffect, useMemo} from 'react'
import { useParams, Link } from "react-router-dom"
import styled from 'styled-components';
import { motion } from "framer-motion"


const Searched = () => {
    const [searchedRecipes, setSearchedRecipes] = useState([]);
    let params = useParams();

    useEffect(() => {
        searchedDb()
    }, [params.search]);
        
    const searchedDb = async () => {
        try {
            const res = await fetch(`/api/searched/${params.search}`)
            const recipe = await res.json()

            if (recipe.length !== 0) {
                setSearchedRecipes(recipe[0].data.results)
            } else {
                getSearched(params.search)
            }
        } catch (error) {
            console.log(error)
        }
    }
    
    const getSearched = async (query) => {
        const res = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${import.meta.env.VITE_API_KEY}&number=10&query=${query}`);
        const data = await res.json();

        setSearchedRecipes(data.results);

        if (data.results.length === 0) return

        fetch('/api/searched/createSearched', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name: params.search, data: data})
        })
    }


    return (
        <Container>
            <h2>Our recipes:</h2>
            {/* {check && <h3>No recipes of {params.search}...</h3>} */}
            <Grid
                animate={{opacity: 1}}
                initial={{opacity: 0}}
                exit={{ opacity: 0 }}
                transition={{duration: 0.5}}
            >
                {searchedRecipes.map(x => (
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
    }
    h3 {
        color: white;
        font-weight: 400;
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
        display: block;
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


export default Searched 