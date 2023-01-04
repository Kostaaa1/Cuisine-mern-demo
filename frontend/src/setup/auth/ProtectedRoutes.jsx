import { useAuth0 } from "@auth0/auth0-react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useContext } from "react";
import AuthContext from "../app-context-menager/AuthContext";

const ProtectedRoutes = () => {
    const { loginWithRedirect } = useAuth0();
    const valid = JSON.parse(localStorage.getItem("validation"));

    return valid ? <Outlet /> : <Navigate to={"/"} />;
};

export default ProtectedRoutes;
