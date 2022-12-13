import { useState } from "react";
import styled from "styled-components";

const Category = () => {
    const [categoryData, setCategoryData] = useState([
        {
            name: "DINNERS",
            categories: [
                { list: "Quick & Easy", query: "quick" },
                { list: "Main Dishes", query: "main" },
                { list: "Soups", query: "soup" },
                { list: "Stews", query: "stew" },
                { list: "30-Minute Meals", query: "minute" },
            ],
        },
        {
            name: "MEALS",
            categories: [
                { list: "Breakfast", query: "breakfast" },
                { list: "Lunch", query: "lunch" },
                { list: "Healthy", query: "healthy" },
                { list: "Salads", query: "salad" },
                { list: "Bread", query: "bread" },
                { list: "Desserts", query: "dessert" },
            ],
        },
        {
            name: "INGEDIENTS",
            categories: [
                { list: "Chicken", query: "chicken" },
                { list: "Beef", query: "beed" },
                { list: "Pork", query: "pork" },
                { list: "Pasta", query: "pasta" },
                { list: "Fruits", query: "Fruits" },
                { list: "Vegetables", query: "vegetables" },
            ],
        },
        {
            name: "CUISINES",
            categories: [
                { list: "Mexican", query: "mexican" },
                { list: "Italian", query: "italian" },
                { list: "Chinese", query: "chinese" },
                { list: "Indian", query: "indian" },
                { list: "German", query: "german" },
                { list: "Greek", query: "greek" },
                { list: "Filipino", query: "filipino" },
                { list: "Japanese", query: "japenese" },
            ],
        },
    ]);
    return (
        <CategorySection>
            {categoryData.map((category) => (
                <Wrapper>
                    <h5>{category.name}</h5>
                    <CategoryDropdown>
                        {category.categories.map((data) => (
                            <li> {data.list} </li>
                        ))}
                    </CategoryDropdown>
                </Wrapper>
            ))}
        </CategorySection>
    );
};
const CategorySection = styled.div`
    margin-top: 20px;
    display: flex;
    flex-direction: row;
`;
const Wrapper = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: column;
    height: 35px;

    &:hover {
        &:hover {
            text-decoration: underline;
            text-decoration-color: var(--red-color);
            text-underline-offset: 5px;
            text-decoration-thickness: 10%;
        }
        ul {
            visibility: visible;
        }
    }

    h5 {
        letter-spacing: 1px;
        margin: 0 40px 40px 0;
        color: var(--main-color);
        cursor: pointer;
    }
`;

const CategoryDropdown = styled.ul`
    position: absolute;
    visibility: hidden;
    top: 80%;
    left: 0;
    min-height: 300px;
    width: 200px;
    border: 1px solid rgba(0, 0, 0, 0.14);
    background-color: white;
    color: var(--main-color);
    list-style: none;
    display: flex;
    justify-content: space-around;
    flex-direction: column;

    li {
        margin: 2px;
        padding: 0 6px;
        font-size: 16px;
        color: var(--grey-color);
        cursor: pointer;

        &:hover {
            color: #8f8e8e;
        }
    }
`;

export default Category;
