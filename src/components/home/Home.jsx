import React, {useState, useEffect} from 'react';
import Language from './Language';
import Contact from './Contact';
import Bio from './Bio';
import Play from './Play';
import InfoButton from '../info/InfoButton';
import Crazy from './Crazy/'

export default function Home(props) {
    const [language, setLanguage] = useState('pt');

    function handleChangeLanguage(event) {
        const {value} = event.target;
        return setLanguage(value);
    }

    return (
        <div 
            className={props.info ? 'home home--act' : 'home'}
        >
            <header className="home__header">
                <InfoButton 
                    info={props.info}
                    change={props.change}
                />
                <Language 
                    language={language}
                    change={handleChangeLanguage}
                    info={props.info}
                />
                <Contact />
            </header>
            <div className="home__content">
                <Bio />
                <Play />
            </div>
            <Crazy />
        </div>
    )
}