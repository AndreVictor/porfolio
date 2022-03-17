import React, { useState, useEffect } from 'react'

export default function CardImg(props) {

    return (
        <img 
            src={props.url} 
            alt={props.name} 
            className={props.imgAct ? 'card__img card__img--act' : 'card__img'} 
        />
    )
}
