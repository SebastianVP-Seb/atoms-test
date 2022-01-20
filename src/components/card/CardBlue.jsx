import React from 'react';
import './card.scss';

function CardBlue({item}) {
  return (
    <div className='cardBlue' >
        <div className='cardBlue_img'>
            <img src={`${item.imrUrl}`} alt={`${item.title}`} />
        </div>
        <h3 className='cardBlue_title'>{item.title}</h3>
        <p className='card_p'>{item.parrafo}</p>
    </div>
    );
}

export default CardBlue;
