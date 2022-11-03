import Home from "./Home"
import {Route, Routes, BrowserRouter, useLocation} from 'react-router-dom'
import Cuisine from "./Cuisine"
import Recipe from "./Recipe"
import Searched from "./Searched"
import { AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"

const Pages = () => {
    const location = useLocation()

    return (
        <div>
            <AnimatePresence exitBeforeEnter>
                <Routes location={location} key={location.pathname}>
                    <Route path="/" element={ <Home /> } />
                    <Route path="/cuisine/:type" element={ <Cuisine /> } />
                    <Route path="/searched/:search" element={ <Searched /> } />
                    <Route path="/recipe/:id" element={ <Recipe /> } />
                </Routes>
            </AnimatePresence>
        </div>
    )
}


export default Pages