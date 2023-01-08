import { useState } from "react";
import { useFavorites } from "./useFavorites";

export const useLayoutData = () => {
    const [mockData, setMockData] = useState([
        {
            data: {
                image: "/src/assets/images/gray-background.jpg",
            },
        },
        {
            data: {
                image: "/src/assets/images/gray-background.jpg",
            },
        },
        {
            data: {
                image: "/src/assets/images/gray-background.jpg",
            },
        },
        {
            data: {
                image: "/src/assets/images/gray-background.jpg",
            },
        },
    ]);

    const { data, length, isLoading, isSuccess } = useFavorites();
    const destructuredArray = data?.map((x) => ({
        data: { image: x.recipe?.image },
    }));

    const arr = mockData.map((fav, i) =>
        destructuredArray?.[i] ? destructuredArray[i] : fav
    );

    return {
        arr,
        length,
        isSuccess,
        isLoading,
    };
};
