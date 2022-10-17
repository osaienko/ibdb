import React, { useState, useEffect } from "react"
import axios from "axios"
import styled from "styled-components"

import Beer from "./Beer"

const Home = styled.div`
    text-align: center;
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
`

const Header = styled.div`
    padding: 100px 100px 10px 100px;
    h1 {
        font-size: 42px;
    }
`

const Subheader = styled.div`
    font-weight: 300;
    font-size: 26px;
`

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 20px;
    width: 100%;
    padding: 20px;
`

const Beers = () => {
    const [beers, setBeers] = useState([])

    useEffect(() => {
        // get from api and update state
        axios.get('/api/v1/beers.json')
            .then(resp => setBeers(resp.data.data))
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
        <Home>
            <Header>
                <h1>IBDB - Internet Beer Database</h1>
                <Subheader>Honest, unbiased Beer reviews.</Subheader>
            </Header>
            <Grid>
                {grid}
            </Grid>
        </Home>
    )
}

export default Beers