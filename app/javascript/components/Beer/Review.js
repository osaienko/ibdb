import React from 'react'
import styled from 'styled-components'

import Rating from '../Rating/Rating'

const Card = styled.div`
    border: 1px solid rgba(0,0,0,0.1);
    border-radius: 4px;
    padding: 20px;
    margin 0 20px 20px 0;
`
const RatingContainer = styled.div`
    display: flex;
    flex-direction: row;
`
const Reviewer = styled.div`
    padding: 10px 0 20px 0;
    font-size: 18px;
`
const Description = styled.div`
    padding:  20px 0 0 0;
    font-size: 14px;
`

const Review = (props) => {
    const {score, color, aroma, flavor, body, reviewer, description} = props.attributes
    return (
        <Card>
            <RatingContainer>
                Score: <Rating value={score}/>
            </RatingContainer>
            <RatingContainer>
                Color: <Rating value={color}/>
            </RatingContainer>
            <RatingContainer>
                Aroma: <Rating value={aroma}/>
            </RatingContainer>
            <RatingContainer>
                Flavour: <Rating value={flavor}/>
            </RatingContainer>
            <RatingContainer>
                Body: <Rating value={body}/>
            </RatingContainer>
            <Description>{description}</Description>
            <Reviewer>Reviewed by: {reviewer}</Reviewer>
        </Card>
    )
}

export default Review