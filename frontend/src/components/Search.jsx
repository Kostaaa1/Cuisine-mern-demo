import { useState } from "react"
import styled from "styled-components"
import { FaSearch } from "react-icons/fa"
import { useNavigate } from "react-router-dom"

const Search = () => {
    const [input, setInput] = useState('')
    const navigate = useNavigate()

    const submitHandler = (e) => {
        e.preventDefault()
        navigate('/searched/' + input)

        setInput('')
    }

    return (
        <Form onSubmit={submitHandler}>
            <div className="form-cont">
                <div className="relative-cont">
                    <input onChange={e => setInput(e.target.value)} type="text" value={input}/>
                    <FaSearch />
                </div>
            </div>
        </Form>
    )
}

const Form = styled.form`
    // margin: 0 15rem;

    // div {
    //     position: relative;
    //     width: 100%;
    // }

    // input {
    //     background: white;
    //     // background: linear-gradient(35deg, #494949, #313131);
    //     font-size: 1.2rem;
    //     color: linear-gradient(35deg, #494949, #313131);
    //     padding: 0.35rem 3rem;
    //     border: none;
    //     border-radius: 2rem;
    //     outline: none;
    //     width: 94%;
    //     font-weight: 500;
    // }

    .form-cont {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .relative-cont {
        position: relative;
    }

    input {
        display: block;
        align-content: center;
        background: white;
        padding: 0.35rem 3rem;
        border-radius: 2rem;
        border: none;
        outline: none;
        width: 35vw;
        font-size: 1.3rem;
        font-weight: 500;
    }

    svg {
        position: absolute;
        top: 50%;
        left: 0;
        transform: translate(100%, -50%);
        color: linear-gradient(35deg, #494949, #313131);
    }
`

export default Search