import React, {useState, useEffect} from 'react';
import { Link } from "react-router-dom";

export default function Header(props) {
    console.log(Link);
    return (
        <header className="header">
            <button className="header__play">
                &nbsp;
            </button>
            <nav className="header__nav">

                <Link 
                    to={`galeria`}
                    style={props.menu === 'galeria' ? {color: 'red', fontWeight: '700', textDecoration: 'none'} : {color: 'black', textDecoration: 'none'}}
                >
                    <label className="header__item">
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
                </Link>

                <span className="header__divider">|</span>

                <Link 
                    to={`detalhes`}
                    style={props.menu === 'detalhes' ? {color: 'red', fontWeight: '700', textDecoration: 'none'} : {color: 'black', textDecoration: 'none'}}
                >
                    <label className="header__item">
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
                </Link>

                <span className="header__divider">|</span>

                <Link 
                    to={`/`}
                    style={props.menu === 'galeria' ? {color: 'red', fontWeight: '700', textDecoration: 'none'} : {color: 'black', textDecoration: 'none'}}
                >
                    <label className="header__item">
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
                </Link>
            </nav>
        </header>
    )
}
 