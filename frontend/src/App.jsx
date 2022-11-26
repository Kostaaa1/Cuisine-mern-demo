import Pages from "./pages/Pages";
import Search from "./components/Search";
import { BrowserRouter, Link } from "react-router-dom";
import "./styles.css";
import Navbar from "./pages/Navbar";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Navbar />
                <Pages />
            </BrowserRouter>
        </div>
    );
}

export default App;
