import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";

export const useFavorites = () => {
    // const { data, isLoading, isSuccess, refetch, isFetched, isFetching } =
    //     useQuery(["favorite"], async () => {
    //         return axios.get("/api/favorites").then((res) => res.data);
    //     });
    const { user } = useAuth0();
    const { data, isLoading, isSuccess, refetch, isFetched, isFetching } =
        useQuery(["favorite"], async () => {
            return axios
                .get(`/api/auth/${user.email}`)
                .then((res) => res.data.collections[0].collRecipes);
        });

    // data = data?.map((el, i, arr) => arr.indexOf(el.name) !== i);
    // data?.filter((x, i, arr) => arr.indexOf(x));

    // console.log([...new Set(data.map((x) => x.recipe.image))]);

    const length = data?.length;

    const refetchOnLoad = () => {
        useEffect(() => {
            refetch();
        }, []);
    };

    return {
        data,
        isLoading,
        isSuccess,
        refetchOnLoad,
        length,
        isFetched,
        isFetching,
    };
};
