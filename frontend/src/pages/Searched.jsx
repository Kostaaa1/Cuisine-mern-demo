import {useState, useEffect} from 'react'
import { useParams, Link } from "react-router-dom"
import styled from 'styled-components';


const Searched = () => {
    const [searchedRecipes, setSearchedRecipes] = useState([]);
    let params = useParams();

    const getSearched = async (query) => {
        const check = localStorage.getItem(`searched/${params.search}`)

        if (check) {
            setSearchedRecipes(JSON.parse(check))
        } else {
            const res = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${import.meta.env.VITE_API_ID}&app_key=${import.meta.env.VITE_API_KEY}`);
            const data = await res.json();

            localStorage.setItem(`searched/${params.search}`, JSON.stringify(data.hits))
            setSearchedRecipes(data.hits);
        }
    }

    useEffect(() => {
        getSearched(params.search);
    }, [params.search]);

    return (
        <Container>
            <h2>Our {params.search} recipes:</h2>
            <Grid>
                {searchedRecipes.map((x, id) => (
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
    }
`

const Grid = styled.div`
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


export default Searched 