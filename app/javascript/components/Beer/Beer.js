import React, { useState, useEffect, Fragment } from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'

import Header from './Header'
import ReviewForm from './ReviewForm'
import Review from './Review'

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

const Beer = () => {
    const [beer, setBeer] = useState({})
    const [review, setReview] = useState({reviewer: '', description: '', score: 0, color: 0, aroma: 0, flavor: 0, body: 0})
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
                setReview({reviewer: '', description: '', score: 0, color: 0, aroma: 0, flavor: 0, body: 0})
            })
            .catch(resp => {})
    }

    const setRating = (valueObj, e) => {
        e.preventDefault()

        setReview({...review, ...valueObj})
    }

    let reviews
    if (loaded && beer.included) {
        reviews = beer.included.map( (item, index) => {
            return (
                <Review
                    key={index}
                    attributes={item.attributes}
                />
            )
        })
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
                            {reviews}
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