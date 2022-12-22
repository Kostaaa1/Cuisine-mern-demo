import Pages from "./pages/Pages";
import Search from "./pages/navbar/components/Search";
import { BrowserRouter, Link } from "react-router-dom";
import "./styles.css";
import Navbar from "./pages/navbar/Navbar";
import { IndexesContextProvider } from "./setup/app-context-menager/IndexesContext";

function App() {
    return (
        <IndexesContextProvider>
            <BrowserRouter>
                <Navbar />
                <Pages />
            </BrowserRouter>
        </IndexesContextProvider>
    );
}

export default App;
