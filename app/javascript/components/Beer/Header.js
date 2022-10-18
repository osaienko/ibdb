import React from 'react'

const Header = (props) => {
    const {name, image_url, avg_score} = props.attributes
    const totalReviews = props.reviews.length

    return (
        <div className="wrapper">
            <h1><img src={image_url} alt={name}/>{name}</h1>
            <div className="totalReviews">{totalReviews} User Reviews</div>
            <div className="totalOutOf">{avg_score} out of 5</div>
        </div>
    )
}

export default Header