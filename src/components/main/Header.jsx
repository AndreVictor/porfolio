import React, {useState, useEffect} from 'react';
import { NavLink } from "react-router-dom";

export default function Header() {
    const navLinkStyles = ({isActive}) => {
        return isActive ? {color: 'red', fontWeight: '700'} : {}
    }

    return (
        <header className="header">
            <button className="header__play">
                &nbsp;
            </button>
            <nav className="header__nav">

                <ul className="header__list">
                    <li className="header__item">
                        <NavLink 
                            to={`/`}
                            style={navLinkStyles}
                        >
                        Lista
                        </NavLink>   
                    </li>

                    <span className="header__divider">|</span>
                
                    <li className="header__item">
                        <NavLink 
                            to={`/galeria`}
                            style={navLinkStyles}
                        >
                        Galeria
                        </NavLink>   
                    </li>

                    <span className="header__divider">|</span>
                    
                    <li className="header__item">
                        <NavLink 
                            to={`/detalhe`}
                            style={navLinkStyles}
                        >
                        Detalhe
                        </NavLink>            
                    </li>
                </ul>
            </nav>
        </header>
    )
}
 