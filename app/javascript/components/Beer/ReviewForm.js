import React, { Fragment } from 'react'

const ReviewForm = (props) => {

    const ratingOptions = [5,4,3,2,1].map( (score, index) => {
        return (
            <Fragment key={index}>
                <input type="radio" value={score} name="rating" onChange={e => console.log(e)} id={`rating-${score}`}/>
                <label></label>
            </Fragment>
        )
    })

    return (
        <div className="wrapper">
            <form onSubmit={props.handleSubmit}>
                <div>Have you tried {props.attributes.name}? Rate it! </div>
                <div className="field">
                    <input onChange={props.handleChange} value={props.review.reviewer} type="text" name="name" placeholder="Reviewer's Name"/>
                </div>
                <div className="field">
                    <input onChange={props.handleChange} value={props.review.description} type="text" name="description" placeholder="Review Description"/>
                </div>
                <div className="field">
                    <div className="rating-container"></div>
                    <div className="rating-title-text">Rate this Beer.</div>
                    {ratingOptions}
                </div>
                <button type="submit">Submit Review</button>
            </form>
        </div>
    )
}

export default ReviewForm