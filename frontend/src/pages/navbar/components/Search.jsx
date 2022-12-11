import { useState } from "react";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Close } from "@material-ui/icons";

const Search = ({ showSearched }) => {
    const [input, setInput] = useState("");
    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();
        navigate("/searched/" + input);

        setInput("");
    };

    return (
        <SearchForm onSubmit={submitHandler}>
            <h4>Search</h4>
            <div className="wrapper">
                <input
                    onChange={(e) => setInput(e.target.value)}
                    type="text"
                    value={input}
                    placeholder="What are you looking for?"
                />
                <FaSearch className="search" onClick={submitHandler} />
                <Close className="close" onClick={showSearched} />
            </div>
        </SearchForm>
    );
};

const SearchForm = styled.form`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 500px;
    height: 50px;
    padding: 0 0 0 10px;

    h4 {
        color: white;
        font-weight: 500;
        margin-right: 20px;
    }

    .wrapper {
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        position: relative;

        input {
            width: 100%;
            height: 80%;
            border: none;
            padding: 0 14px;
            font-size: 1rem;

            &:focus {
                outline: none;
            }
        }
        .search {
            height: 80%;
            width: 40px;
            padding: 12px;
            color: white;
            cursor: pointer;
            background-color: #ce4620;
        }

        .close {
            color: white;
            font-size: 2.8rem;
            cursor: pointer;
        }
    }
`;

export default Search;