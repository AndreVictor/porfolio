import React, {useState, useEffect} from 'react';

export default function Header(props) {
    return (
        <header className="header">
            <button className="header__play">
                &nbsp;
            </button>
            <nav className="header__nav">

                <label 
                    className="header__item"
                    style={props.menu === 'galeria' ? {color: 'red', fontWeight: '700'} : {}}
                >
                    <input 
                        type="radio" 
                        id="galeria" 
                        name="menu"
                        value="galeria"
                        checked={props.menu === 'galeria'}
                        onChange={props.change}
                    />
                    Galeria
                </label>

                <span className="header__divider">|</span>

                <label 
                    className="header__item"
                    style={props.menu === 'detalhes' ? {color: 'red', fontWeight: '700'} : {}}
                >
                    <input 
                        type="radio" 
                        id="detalhes" 
                        name="menu"
                        value="detalhes"
                        checked={props.menu === 'detalhes'}
                        onChange={props.change}
                    />
                    Detalhes
                </label>

                <span className="header__divider">|</span>

                <label 
                    className="header__item"
                    style={props.menu === 'lista' ? {color: 'red', fontWeight: '700'} : {}}
                >
                    <input 
                        type="radio" 
                        id="lista" 
                        name="menu"
                        value="lista"
                        checked={props.menu === 'lista'}
                        onChange={props.change}
                    />
                    Lista
                </label>
            </nav>
        </header>
    )
}
 