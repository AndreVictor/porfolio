import React, { useState, useEffect, useRef } from 'react'
import GalleryCard from './GalleryCard';

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import imgDatatest from '../../imgDatatest';

export default function Galeria() {
    gsap.registerPlugin(ScrollTrigger);
    const ref = useRef(null);

    useEffect(() => {
        const element = ref.current;

        gsap.fromTo(
          element.querySelector(".gallery__box"),
          {
            opacity: 0,
            y: -20,
          },
          {
            opacity: 1,
            y: 0,
            scrollTrigger: {
                trigger: element.querySelector(".gallery__box"),
                start: 'center center',
                pin: true,
                scrub: 1,
              },
          }
        );
      }, []);

    return (
        <div ref={ref} className="main-module">
            <div className="gallery__box">
                {imgDatatest.data.memes.map(({id,url}, index) => {
                        return ( 
                            <GalleryCard
                                key={id}
                                url={url}
                            />
                        )
                })}      
            </div>
        </div>
    )
}
