import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import styled from "styled-components"

const Recipe = () => {
    const [recipe, setRecipe] = useState([])
    const [ingredients, setIngredients] = useState([])
    const [instructions, setInstructions] = useState([])
    const [active, setActive] = useState(true)
    const params = useParams()

    useEffect(() => {
        getDetails()
    }, [params.id])

    const getDetails = async () => {
        try {
            const res = await fetch(`/api/recipe/${params.id}`)
            const data = await res.json()

            if (data.length !== 0) {
                setRecipe(data[0].data)
                setIngredients(data[0].data.extendedIngredients)
                setInstructions(data[0].data.analyzedInstructions[0].steps)
            } else {
                fetchDetails(params.id)
            }
        } catch (error) {
            console.log(error)
        }
    }

    const fetchDetails = async (id) => {
        const res = await fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=f4eb30e350ef4261a02e333108f3ad33`)
        const infoData = await res.json() 

        fetch('/api/recipe/createInfo', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({id: params.id, info: infoData})
        })
        setRecipe(infoData)
        setIngredients(infoData.extendedIngredients)
        setInstructions(infoData.analyzedInstructions[0].steps)
    }


    return (
        <Wrapper>
            <div className="label">
                <h2> {recipe.title} </h2>
                <img src={recipe.image} alt="" />
            </div>
            <Info>
                <div className="btn">
                    <Button className={active ? 'active' : ''} onClick={() => setActive(true)}>Ingredients</Button>
                    <Button className={active ? '' : 'active'} onClick={() => setActive(false)}>instructions</Button>
                </div>
                <div>
                    {active && <ul>
                        {ingredients.map((x, id) => (
                            <li key={id}> {x.original} </li>
                        ))}
                    </ul>}
                    
                    {!active && <ul>
                        {instructions.map(x => (
                            <li key={x.id}> {x.step} </li>
                        ))}
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
        width: 440px;
        height: 400px;
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
        margin-bottom: 3rem;
        width: 420px;
        overflow-wrap: break-word;
    }

    li {
        font-size: 1.2rem;
        line-height: 2.5rem;
        list-style: square;
        color: #111;
        font-weight: 600;
    }
    ul {
        margin-top: 1.4rem;
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
    position: relative;
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