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

export const fetchFavoriteRecipes = async (mockData) => {
    try {
        const res = await fetch("/api/favorites");
        const favorites = await res.json();

        return mockData.map((data, i) => (favorites[i] ? favorites[i] : data));
    } catch (error) {
        console.log(error);
    }
};

export const fetchFavoriteRecipesLength = async () => {
    try {
        const res = await fetch("/api/favorites");
        const favorites = await res.json();

        const favoritesLength = favorites.length;
        return favoritesLength;
    } catch (error) {
        console.log(error);
    }
};
