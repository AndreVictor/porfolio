import React, { useState, useEffect } from 'react'
import Crazy from '../home/Crazy';

export default function Footer() {
    return (
        <footer className="footer">
            <h6 className="footer__contact">
                ola@andre-victor.com
            </h6>
            <Crazy />
        </footer>
    )
}
