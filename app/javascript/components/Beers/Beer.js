import React from "react"
import { BrowserRouter as Router, Link } from 'react-router-dom'

const Beer = (props) => {
    return (
        <div className="card">
            <div className="beer-logo">
                <img src={props.attributes.image_url} alt={props.attributes.name}/>
            </div>
            <div className="beer-name">{props.attributes.name}</div>
            <div className="beer-score">{props.attributes.avg_score}</div>
            <div className="beer-link">
                <Link to={`/beers/${props.attributes.slug}`}>Check out this Beer</Link>
            </div>
        </div>
    )
}

export default Beer
