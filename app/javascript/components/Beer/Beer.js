import React, { useState, useEffect, Fragment } from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'

import Header from './Header'
import ReviewForm from './ReviewForm'

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

const Reviews = styled.div``

const Beer = (props) => {
    const [beer, setBeer] = useState({})
    const [review, setReview] = useState({reviewer: '', description: '', score: 0, })
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

    const handleChange = (e) => {
        e.preventDefault()

        setReview(Object.assign({}, review, {[e.target.name]: e.target.value}))
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const csrfToken = document.querySelector('[name=csrf-token]').content
        axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken

        const beer_id = beer.data.id
        axios.post('/api/v1/reviews', {review, beer_id})
            .then(resp => {
                const included = [...beer.included, resp.data.data]
                setBeer({...beer, included})
                setReview({reviewer: '', description: '', score: 0, })
            })
            .catch(resp => {})
    }

    const setRating = (score, e) => {
        e.preventDefault()

        setReview({...review, score})
    }

    return (
        <Wrapper>
            { loaded &&
                <Fragment>
                    <Column>
                        <Main>
                            <Header
                            attributes={beer.data.attributes}
                            reviews={beer.included}
                            />
                            <div className="reviews"></div>
                        </Main>
                    </Column>
                    <Column>
                        <ReviewForm
                            handleChange={handleChange}
                            handleSubmit={handleSubmit}
                            setRating={setRating}
                            attributes={beer.data.attributes}
                            review={review}
                        />
                    </Column>
                </Fragment>
            }
        </Wrapper>
    )
}

export default Beer