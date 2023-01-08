import { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useAuth = () => {
    const { user, isAuthenticated, getAccessTokenSilently, logout, isLoading } =
        useAuth0();
    const [currentUser, setCurrentUser] = useState();
    const valid = JSON.parse(localStorage.getItem("validation"));
    const [authenticated, setAuthenticated] = useState(
        JSON.parse(localStorage.getItem("validation"))
    );

    useEffect(() => {
        const item = localStorage.getItem("validation");

        if (!item && isAuthenticated) {
            localStorage.setItem("validation", true);
            setAuthenticated(true);
        }
    });

    const userLogout = () => {
        localStorage.clear();
        logout();
        setCurrentUser(null);
    };
    // const { data: jwtToken } = useQuery(["token"], async () => {
    //     return getAccessTokenSilently()
    //         .then((res) => res)
    //         .then((data) => data);
    // });

    useEffect(() => {
        newUser();
    }, [user]);

    const newUser = async () => {
        try {
            if (!isLoading) {
                const res = await fetch(`/api/auth/${user?.email}`);
                const data = await res.json();

                if (!data) {
                    addNewUser();
                }
                console.log(data);
                setCurrentUser(data);
            }
        } catch (error) {
            console.log(error);
        }
    };

    const addNewUser = async () => {
        if (user) {
            const newUser = {
                nickname: user.nickname,
                email: user.email,
                name: user.name,
                picture:
                    "https://st3.depositphotos.com/4326917/12573/v/450/depositphotos_125734036-stock-illustration-user-sign-illustration-white-icon.jpg",
                collections: [
                    {
                        collName: "All saved items",
                        collDesc: "",
                        private: false,
                        collRecipes: [],
                    },
                ],
            };

            await fetch("/api/auth", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    user: newUser,
                }),
            });
        }

        newUser();
    };
    return { currentUser, userLogout, authenticated, newUser };
};
