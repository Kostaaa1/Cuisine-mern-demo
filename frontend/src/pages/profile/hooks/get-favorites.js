export const fetchFavoriteRecipes = async (mockData) => {
    const res = await fetch("/api/favorites");
    const favorites = await res.json();

    return mockData.map((data, i) => (favorites[i] ? favorites[i] : data));
};

export const fetchSavedRecipes = async () => {
    const res = await fetch("/api/favorites");
    const data = await res.json();

    return data ?? [];
};

export const fetchFavoriteRecipesLength = async () => {
    const res = await fetch("/api/favorites");
    const favorites = await res.json();

    const favoritesLength = favorites.length;

    return favoritesLength;
};
