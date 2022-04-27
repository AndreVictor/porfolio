import React, { useState, useEffect, useRef } from 'react'
import imgDatatest from '../../imgDatatest';

export default function Detalhe() {

    return (
            <div className="detalhe__box">
                <header className="detalhe__header">
                    <div className="detalhe__title">
                        {imgDatatest.data.memes[0].name}
                    </div>
                    <div className="detalhe__year">
                        2021
                    </div>
                    <div className="detalhe__category">
                        front-end
                    </div>
                    <div className="detalhe__tags">
                        <p>cinema</p>
                        <span className="detalhe__tag-divider">|</span>
                        <p>festival online</p>
                        <span className="detalhe__tag-divider">|</span>
                        <p>autenticação</p>
                    </div>
                </header>
                <div className="detalhe__main">
                    <div className="detalhe__text-box">
                        <p className="detalhe__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae quas fuga corporis molestias minus voluptas, deleniti sequi quasi dignissimos, nisi earum quod libero possimus dicta, numquam reiciendis exercitationem blanditiis animi!</p>
                        <div className="detalhe__link-box">
                            <a href="#" className="detalhe__link">
                                janeladecinema.com.br
                            </a>
                            <a href="#" className="detalhe__link">
                                github.com/andrevictor/janeladecinema
                            </a>
                        </div>
                    </div>
                    <img 
                        src={imgDatatest.data.memes[3].url} 
                        alt={imgDatatest.data.memes[0].name}  
                        className="detalhe__img" 
                    />
                </div>
            </div>
    )
}
