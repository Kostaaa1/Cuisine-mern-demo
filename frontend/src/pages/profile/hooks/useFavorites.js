import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import axios from "axios";

export const useFavorites = () => {
    const { data, isLoading, isSuccess, refetch, isFetched, isFetching } =
        useQuery(["favorite"], async () => {
            return axios.get("/api/favorites").then((res) => res.data);
        });

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
