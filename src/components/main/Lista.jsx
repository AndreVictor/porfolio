import React, { useState, useEffect } from 'react'
import Card from './Card';
import CardImg from './CardImg';

import imgDatatest from '../../imgDatatest';

export default function Lista() {
    const [activeIndex, setActiveIndex] = useState(-1);

    return (
        <div className="main-module">

            <div className="card-box">
                {imgDatatest.data.memes.map(({id, name}, index) => {
                    return ( 
                        <Card
                            key={id}
                            name={name}
                            setActiveIndex={setActiveIndex}
                            index={index}
                        />
                    )
                })}
            </div>

            <div className="card__img-box">
                {imgDatatest.data.memes.map(({id,url}, index) => {
                    const isActive = index === activeIndex;
                    return ( 
                        <CardImg
                            key={id}
                            url={url}
                            imgAct={isActive}
                        />
                    )
                })}
            </div>

        </div>
    )
}
