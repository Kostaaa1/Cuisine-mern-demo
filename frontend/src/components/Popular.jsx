import { useEffect, useState } from "react"
import styled from 'styled-components'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { Link } from "react-router-dom";

const Popular = () => {
    const [popular, setPopular] = useState([])
    useEffect(() => {
        // getPopular()
        fetch('/api/getPopular')
			.then(res => res.json())
			.then(data => {
                let arr = Array(20).fill().map(x => data.popular.recipes[Math.floor(Math.random() * data.popular.recipes.length)])
                setPopular(arr.filter((x, i) => arr.indexOf(x) == i))
            })
			.catch(err => console.log(err))
    }, [])
    
    // const getPopular = async () => {
    //     const res = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=popular&app_id=${import.meta.env.VITE_API_ID}&app_key=${import.meta.env.VITE_API_KEY}&random=true`)
    //     const data = await res.json()

    //     setPopular(data.hits)
    // }
    return (
        <div>
            <Wrapper>
                <h3>Our Popular Picks:</h3>
                <Splide options={{
                    perPage: 3,
                    arrows: false,
                    pagination: false,
                    drag: 'free',
                    gap: '3rem',
                    breakpoints: {
                        1024: {
                          perPage: 2,
                         
                        },
                        767: {
                          perPage: 1,
                      
                        }
                    }
                }}>
                {popular.map((x, id) => (
                    <SplideSlide key={id}>
                        <Card>
                            <Link to={'/recipe/' + x.id}>
                                <p>{x.title}</p>
                                <img src={x.image} alt="" />
                                <Gradient />
                            </Link>
                       </Card>
                    </SplideSlide>    
                ))}
                </Splide>
            </Wrapper>
        </div>
    )
}

const Wrapper = styled.div`
    margin: 0 20px;

    h3 {
        color: white;
        margin-bottom: 20px;
    }
`
const Card = styled.div`
    min-height: 14rem;
    overflow: hidden;
    position: relative;

    img {
        position: absolute;
        width: 100%;
        height: 100%;
        border-radius: 12px;
    }

    p {
        position: absolute;
        z-index: 10;
        width: 100%;
        height: 100%;
        transform: translate(-50%, 0%);
        top: 30%; 
        left: 50%;
        text-align: center;
        color: white;
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
    background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.6));
    border-radius: 12px;
    z-index: 3;
`

export default Popular