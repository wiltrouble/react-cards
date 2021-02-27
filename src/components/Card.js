import React from 'react'
import PropTypes from "prop-types";

import './cards.css'


function Card({title, image, text, url}) {

    return (
        <div className="card text-center bg-dark animate__animated animate__fadeInUp">
            <div className="overflow">
            <img src={image} className="card-img-top" alt="img"/>
            </div>
            <div className="card-body text-light">
                <h1 className="card-title">{title}</h1>
                <p className="card-text text-secondary">
                    {
                        text ? text : `Lorem Ipsum is simply dummy text of the printing and typesetting
                         industry. Lorem Ipsum has been the industry's standard`
                    }
                </p>
                <a href={url} className="btn btn-outline-secondary rounded-0" target="_blank">
                    Go to {title}
                </a>    
            </div>
        </div>
    )
}

Card.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string,
    image: PropTypes.string,
    text: PropTypes.string
}

export default Card
