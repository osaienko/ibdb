import React, { useState, useEffect } from "react"
import axios from "axios"

import Beer from "./Beer"

const Beers = () => {
    const [beers, setBeers] = useState([])

    useEffect(() => {
        // get from api and update state
        axios.get('/api/v1/beers.json')
            .then(resp => {
                setBeers(resp.data.data)
            })
            .catch(resp => console.log(resp))
    }, [beers.length])

    const grid = beers.map( item => {
        return (
            <Beer
                key={item.attributes.name}
                attributes={item.attributes}
            />
        )
    })

    return (
        <div className="home">
            <div className="header">
                <h1>IBDB - Internet Beer Database</h1>
                <div className="subheader">Honest, unbiased Beer reviews.</div>
            </div>
            <div className="grid">
                {grid}
            </div>
        </div>
    )
}

export default Beers