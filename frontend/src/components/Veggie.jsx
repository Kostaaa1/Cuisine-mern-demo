import { useEffect, useState } from "react"
import styled from "styled-components"
import { Splide, SplideSlide } from "@splidejs/react-splide"
import { Link } from "react-router-dom";
import '@splidejs/react-splide/css';


const Veggie = () => {

    const [veggie, setVeggie] = useState([])

    useEffect(() => {
        // getVeggie()
        fetch('/api/getVeggie')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setVeggie(Array.from({length: 14}, (x, y) => data.veggie.hits[Math.floor(Math.random() * data.veggie.hits.length)]))
            })
            .catch(err => console.log(err))
    }, [])

    // const getVeggie = async () => {
    //     const res = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=popular&app_id=${import.meta.env.VITE_API_ID}&app_key=${import.meta.env.VITE_API_KEY}&random=true`)
    //     const data = await res.json()
        
    //     setVeggie(data.hits)
    // }
    
    return (
        <Wrapper>
            <h3>Our Vegan Picks:</h3>
            <Splide options={{
                perPage: 4,
                arrows: false,
                pagination: false,
                drag: 'free',
                gap: '2.5rem',
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
            }}>
                {veggie.map((hit, id) => (
                    <SplideSlide key={id}>
                        <Link to={'/recipe/' + hit.recipe.uri.slice(51)}>
                            <Card>
                                <p> {hit.recipe.label} </p>
                                <img src={hit.recipe.image} alt="" />
                                <Gradient />
                            </Card>
                        </Link>
                    </SplideSlide>
                ))}
            </Splide>
           
        </Wrapper>
    )
}

const Wrapper = styled.div`
    margin: 4rem 0;
    padding: 0 20px;

    h3 {
        color: white;
        margin-bottom: 20px;
    }
`
const Card = styled.div`
    min-height: 14rem;
    position: relative;
    overflow: hidden;

    img {
        position: absolute;
        width: 100%;
        height: 100%;
        border-radius: 12px;
        left: 0;
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
`

const Gradient = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 3;
    background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.6));
    border-radius: 12px;
`


export default Veggie