import Pages from "./pages/Pages";
import Search from "./pages/navbar/components/Search";
import { BrowserRouter, Link } from "react-router-dom";
import "./styles.css";
import Navbar from "./pages/navbar/Navbar";
import { IndexesContextProvider } from "./setup/app-context-menager/IndexesContext";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";
import { useAuth } from "./setup/auth/useAuth";
import AuthContext, {
    AuthContextProvider,
} from "./setup/app-context-menager/AuthContext";

function App() {
    return (
        <IndexesContextProvider>
            <AuthContextProvider>
                <BrowserRouter>
                    <Navbar />
                    <Pages />
                </BrowserRouter>
            </AuthContextProvider>
        </IndexesContextProvider>
    );
}

export default App;
