import React, { useState, useEffect } from 'react'

export default function CardImg(props) {
    const cardId = 'gallery__img-' + props.index;

    return (
        <div 
            className={props.index%2 === 0 ? "gallery__card gallery__card--top" : "gallery__card gallery__card--bottom"}
        >
            <img 
                src={props.url} 
                alt={props.name} 
                className='gallery__img' 
                id={cardId}
            />
            <div className='gallery__card-info'>
                <h3 className="gallery__card-title">{props.name}</h3>
                <div className="gallery__card-divider">&nbsp;</div>
                <p className="gallery__card-year">2022</p>
                <div className="gallery__card-divider">&nbsp;</div>
                <p className="gallery__card-category">front-end</p>
                <div className="gallery__card-divider">&nbsp;</div>
                <p className="gallery__card-category gallery__card-category--low">cinema, festivla de cinema, autenticação</p>
                
            </div>
        </div>
    )
}
