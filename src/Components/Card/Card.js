import React from 'react';
import './card.css';
const Card = (props) => {
    let data = props.data;
    console.log(data);
    return (
        <div className='card-main'>
            <div className='card-top'>
                <img className='img-card' alt='imgtrial' src={data.image} />
            </div>
            <div className='card-bot'>
                <h2>{data.name}</h2>
                <p>{data.description}</p>
            </div>
        </div>
    )
}

export default Card;
