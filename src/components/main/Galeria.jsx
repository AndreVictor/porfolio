import React, { useState, useEffect, useRef } from 'react'
import GalleryCard from './GalleryCard';
import imgDatatest from '../../imgDatatest';

export default function Galeria() {

    return (
            <div className="gallery__box">
                {imgDatatest.data.memes.map(({id,url, name}, index) => {
                        return ( 
                            <GalleryCard
                                key={id}
                                url={url}
                                index={index}
                                name={name}
                            />
                        )
                })}      
            </div>
    )
}
