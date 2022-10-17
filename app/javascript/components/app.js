import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Beer from "./Beer/Beer"
import Beers from "./Beers/Beers"

const App = () => {
    return (
        <Routes>
            <Route exact path="/" element={<Beers/>}/>
            <Route exact path="/beers/:slug" element={<Beer/>}/>
        </Routes>
    )
}

export default App