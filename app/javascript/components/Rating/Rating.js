import React from 'react'
import './Rating.css'
import 'font-awesome/css/font-awesome.css'

const Rating = (props) => {
    const percentValue = (props.value / 5) * 100
    return (
        <span className="star-wrapper">
            <span className="stars" style={{width: percentValue + "%"}}></span>
        </span>
    )
}

export default Rating