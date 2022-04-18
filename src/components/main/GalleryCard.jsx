import React, { useState, useEffect } from 'react'

export default function CardImg(props) {

    return (
        <div className="gallery__card">
            <img 
                src={props.url} 
                alt={props.name} 
                className='gallery__img' 
            />
        </div>
    )
}
