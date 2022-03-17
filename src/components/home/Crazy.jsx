import React, { useState, useEffect } from 'react'

export default function Crazy() {

    return (
        <div className="home__crazy">
            <label className="home__crazy-input">
                <input 
                    type="checkbox" 
                    id="home-crazy-input" 
                />
                Crazy Mode
            </label>
        </div>
    )
}