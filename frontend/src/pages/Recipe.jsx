import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import styled from "styled-components"

const Recipe = () => {
    const [recipe, setRecipe] = useState([])
    const [ingredients, setIngredients] = useState([])
    const [active, setActive] = useState(true)
    const params = useParams()

    const fetchDetails = async (id) => {
        const res = await fetch(`https://api.edamam.com/api/recipes/v2/${id}?type=public&app_id=${import.meta.env.VITE_API_ID}&app_key=${import.meta.env.VITE_API_KEY}`)
        const data = await res.json() 

        setRecipe(data.recipe)
        setIngredients(data.recipe.ingredients)
        console.log(recipe)
    }

    useEffect(() => {
        fetchDetails(params.id)
        console.log(recipe)
    }, [params.id])

    return (
        <Wrapper>
            <div className="label">
                <h2> {recipe.label} </h2>
                <img src={recipe.image} alt="" />
            </div>
            <Info>
                <div className="btn">
                    <Button className={active ? 'active' : ''} onClick={() => setActive(true)}>Ingredients</Button>
                    <Button className={active ? '' : 'active'} onClick={() => setActive(false)}>About</Button>
                </div>
                <div>
                    {active && <ul>
                        {ingredients.map((x, id) => (
                            <li key={id}> {x.text} </li>
                        ))}
                    </ul>}

                    {!active && <ul>
                        <li>Dish type: <span>{recipe.dishType}</span>  </li>
                        <li>Cuisine type: <span>{recipe.cuisineType}</span>  </li>
                        <li>Meal type: <span>{recipe.mealType}</span>  </li>
                        <li>Calories: <span>{Math.round(recipe.calories, 2)} cal</span>  </li>
                    </ul>}
                </div>
            </Info>
            
        </Wrapper>
    )
}


const Wrapper = styled.div`
    margin-top: 5.7rem;
    margin-bottom: 5rem;
    min-height: 600px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    padding: 2rem;
    position: relative;
    background: url('https://thumbs.dreamstime.com/z/pasta-salad-plate-ingredients-white-background-118858457.jpg') no-repeat center center;
    border-radius: 20px;
    // background-repeat: no-repeat;
    // background-size: cover;

    img {
        width: 400px;
        height: 420px;
        object-fit: cover;
        border-radius: 20px;
    }

    .active {
        background: linear-gradient(35deg, #494949, #313131);
        color: white;
    }

    .btn {
        display: flex;
    }

    .label {
        padding: 1rem;
    }

    h2 { 
        margin-bottom: 2rem;
        width: 420px;
        overflow-wrap: break-word;
    }

    li {
        font-size: 1.2rem;
        line-height: 2.5rem;
        list-style: square;
        color: black;
        font-weight: 600;
    }
    ul {
        margin-top: 3rem;
    }

    span {
        margin-left: 5px;
    }
`

const Button = styled.button`
    padding: 1rem 2rem;
    color: #313131;
    font-weight: 600;
    background: white;
    margin-right: 2rem;
    cursor: pointer;
    transition: all 0.3s 0s ease;


    &:hover {
        transform: scale(1.1)
    }
`

const Info = styled.div`
    margin-left: 8rem;
    display: flex;
    align-items: flex-start;
    padding: 1rem;
    // block-size: fit-content;
    justify-content: flex-start;
    flex-direction: column;
    width: 500px;
`

export default Recipe 