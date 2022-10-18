import React, { useState, useEffect } from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'

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
        <div className="wrapper">
            <div className="wrapper">
                {loaded &&
                    <Header
                    attributes={beer.data.attributes}
                    reviews={beer.included}
                />}
                <div className="reviews"></div>
            </div>
            <div className="wrapper">
                <div className="review-form">[Review Form]</div>
            </div>
        </div>
    )
}

export default Beer