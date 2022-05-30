import { useState } from 'react'
import './App.scss'
import Home from "./Layouts/Home";
import { AnimatePresence } from "framer-motion";
import Historique from "./Layouts/Historique";

function App () {

    return (
        <AnimatePresence>
            <div className="App">
                <Home />
                <Historique />
            </div>
        </AnimatePresence>
    )
}

export default App
