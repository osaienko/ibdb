import React, { useState, useEffect } from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'

const Wrapper = styled.div`
    margin-left: auto;
    margin-right: auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
`

const Column = styled.div`
    background: #fff;
    height: 100vh;
    overflow: scroll;
    
    &:last-child {
        background: #000;
    }
`

const Main = styled.div`
    padding-left: 50px; 
`

const ReviewForm = styled.div``
const Reviews = styled.div``

import Header from './Header'

const Beer = (props) => {
    const [beer, setBeer] = useState({})
    const [review, setReview] = useState({})
    const [loaded, setLoaded] = useState(false)
    const {slug} = useParams()

    useEffect(() => {
        const url = `/api/v1/beers/${slug}`

        axios.get(url)
            .then(resp => {
                setBeer(resp.data)
                setLoaded(true)
            })
            .catch(resp => console.log(resp))
    }, [])

    return (
        <Wrapper>
            <Column>
                <Main>
                    {loaded &&
                        <Header
                        attributes={beer.data.attributes}
                        reviews={beer.included}
                    />}
                    <div className="reviews"></div>
                </Main>
            </Column>
            <Column>
                <div className="review-form">[Review Form]</div>
            </Column>
        </Wrapper>
    )
}

export default Beer