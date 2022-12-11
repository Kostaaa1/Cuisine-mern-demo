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
