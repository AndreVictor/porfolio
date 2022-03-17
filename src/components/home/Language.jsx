import React, {useState, useEffect} from 'react';

export default function Language(props) {
    return (
        <div 
            className={props.info ? 'home__language home__language--act' : 'home__language'}
        >
            <label 
                className="home__language-text"
                style={props.language === 'pt' ? {fontWeight: '700'} : {}}
            >
                <input 
                    type="radio" 
                    id="language-pt" 
                    name="language"
                    value="pt"
                    onChange={props.change}
                    checked={props.language === 'pt'}
                />
                PT
            </label>
            <span className="home__language-divider">
                |
            </span>
            <label 
                className="home__language-text"
                style={props.language === 'en' ? {fontWeight: '700'} : {}}
            >
                <input 
                    type="radio" 
                    id="language-en" 
                    name="language"
                    value="en"
                    onChange={props.change}
                    checked={props.language === 'en'}
                />
                EN
            </label>
        </div>
    )
}
 