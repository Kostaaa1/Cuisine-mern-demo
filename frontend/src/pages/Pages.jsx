import Home from "./Home";
import {
    Route,
    Routes,
    BrowserRouter,
    useLocation,
    useParams,
} from "react-router-dom";
import Cuisine from "./Cuisine";
import Recipe from "./Recipe";
import AddRecipe from "./AddRecipe";
import Searched from "./Searched";
import MyProfile from "./MyProfile";
import PersonalInfo from "../components/MyProfile/PersonalInfo";
import PublicProfile from "../components/MyProfile/PublicProfile";
import ChangePassword from "../components/MyProfile/ChangePassword";
import PersonalRecipes from "../components/MyProfile/PersonalRecipes";
import SavedItems from "../components/MyProfile/SavedItems";
import Reviews from "../components/MyProfile/Reviews";
import Category from "../components/Category";
import { useEffect, useState } from "react";

const Pages = () => {
    const location = useLocation();
    const [lists, setLists] = useState([
        {
            id: 0,
            text: "Personal Info",
            selected: true,
            component: "PersonalInfo",
            route: "/",
        },
        {
            id: 1,
            text: "Public Profile Settings",
            selected: false,
            component: "PublicProfile",
            route: "/public-profile",
        },
        {
            id: 2,
            text: "Change Password",
            selected: false,
            component: "ChangePassword",
            route: "/change-password",
        },
        {
            id: 3,
            text: "Saved Items & Collections",
            icon: "FaHeart",
            selected: false,
            component: "SavedItems",
            route: "/collections",
        },
        {
            id: 4,
            text: "Personal Recipes",
            selected: false,
            icon: "FaUtensilSpoon",
            component: "PersonalRecipes",
            route: "/recipes",
        },
        {
            id: 5,
            text: `  Reviews`,
            selected: false,
            icon: "MdReviews",
            component: "Reviews",
            route: "/reviews",
        },
    ]);

    const StaticList = {
        PersonalInfo,
        PublicProfile,
        ChangePassword,
        PersonalRecipes,
        SavedItems,
        Reviews,
    };

    useEffect(() => {
        const route = location.pathname.slice(16);

        if (route !== "") {
            setLists(
                lists.map((list) =>
                    list.route === route
                        ? { ...list, selected: true }
                        : { ...list, selected: false }
                )
            );
        }
    }, [location.pathname]);

    return (
        <div>
            <Routes location={location} key={location.pathname}>
                <Route
                    path="/"
                    element={
                        <>
                            {/* <Category /> */}
                            <Home />
                        </>
                    }
                />
                <Route
                    path="/cuisine/:type"
                    element={
                        <>
                            {/* <Category /> */}
                            <Cuisine />
                        </>
                    }
                />
                <Route
                    path="/searched/:search"
                    element={
                        <>
                            {/* <Category /> */}
                            <Searched />
                        </>
                    }
                />
                <Route
                    path="/recipe/:id"
                    element={
                        <>
                            {/* <Category /> */}
                            <Recipe />
                        </>
                    }
                />

                <Route path="/account/addRecipe/" element={<AddRecipe />} />

                <Route
                    path="/account/profile"
                    element={
                        <div>
                            <MyProfile
                                listContent={lists}
                                staticList={StaticList}
                            />
                        </div>
                    }
                />
                <Route
                    path="/account/profile/:name"
                    element={
                        <MyProfile
                            listContent={lists}
                            staticList={StaticList}
                        />
                    }
                />
            </Routes>
        </div>
    );
};

export default Pages;
