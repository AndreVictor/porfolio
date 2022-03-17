import React, { useState, useEffect } from 'react'
import Crazy from '../home/Crazy';

export default function Footer() {
    const [fixedFooter, setFixedFooter] = useState(false);

    useEffect(() => {
        function watchScroll() {
            window.scrollY > window.innerHeight 
            ? setFixedFooter(true) : setFixedFooter(false);
        }

        window.addEventListener('scroll', watchScroll);

        return ()=> {
            window.removeEventListener('resize', watchScroll);
        }
    }, []);

    return (
        <footer 
            className='footer'
            style={fixedFooter ? {position: 'fixed', bottom: 0, zIndex: 3} : {}}
        >
            <h6 className="footer__contact">
                ola@andre-victor.com
            </h6>
            <Crazy />
        </footer>
    )
}
