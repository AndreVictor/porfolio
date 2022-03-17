import React, { useState, useEffect } from 'react'

export default function Card(props) {

    return (
            <div 
                className="card"
                onMouseEnter={() => props.setActiveIndex(props.index)}
                onMouseLeave={() => props.setActiveIndex(-1)}
            >
                <div className="card__title">
                    {props.name}
                </div>
                <div className="card__year">
                    2021
                </div>
                <div className="card__category">
                    front-end    
                </div>
                <div className="card__tags">
                    <h6>cinema</h6>
                    <span className="card__tag-divider">|</span>
                    <h6>festival online</h6>
                    <span className="card__tag-divider">|</span>
                    <h6>autenticação</h6>
                </div>
            </div>
    )
}
