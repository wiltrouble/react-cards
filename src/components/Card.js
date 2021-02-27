import React from 'react'
import image1 from "../assets/image1.jpg";

function Card() {
    return (
        <div className="card">
            <img src={image1} className=""/>
            <div className="card-body">
                <h1 className="card-title">Card title</h1>
                <p className="card-text text-secondary">Lorem Ipsum is simply dummy text of the printing and typesetting 
                    industry. Lorem Ipsum has been the industry's standard dummy 
                    text ever since the 1500s</p>
            </div>
        </div>
    )
}

export default Card
