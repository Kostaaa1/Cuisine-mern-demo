import axios from "axios";

export const fetchPopular = async () => {
    const response = await axios.get("/api/getPopular");
    const data = await response.data;

    const popular = data.popular.recipes.sort(() => Math.random() - 0.5);
    return popular;
};

export const fetchVeggie = async () => {
    const response = await axios.get("/api/getVeggie");
    const data = await response.data;

    const veggie = data.veggie.recipes.sort(() => Math.random() - 0.5);
    return veggie;
};
