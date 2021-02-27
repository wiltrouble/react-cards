import React from 'react'
import Card from './Card'

import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";

const cards = [
    {
        id: 1,
        title: 'google.com',
        image: image1,
        url: 'https:google.com',
    },{
        id: 2,
        title: 'netflix.com',
        image: image2,
        url: 'https:netflix.com'
    },{
        id: 3,
        title: 'youtube.com',
        image: image3,
        url: 'https:youtube.com'
    }
]

function Cards() {
    return (
        <div className="container d-flex justify-content-center align-items-center h-100 ">
            <div className="row">
                {
                    cards.map(card => (
                        <div className="col-md-4" key={card.id}>
                            <Card title={card.title} image={card.image} url={card.url} text={card.text}></Card>
                        </div>
                    ))
                }
            </div>
        </div>
        
    )
}

export default Cards
