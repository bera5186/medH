import React, { useState } from 'react'

export const Navbar = () => {

    return (
        
            <header onScrollCapture className="navbar">
                <h1 className="navbar__left">
                    medH
                </h1>
                <ul className="navbar__right">
                    <li className="navbar__right-item"><a className="navbar__right-item--link" href="/">What is it ?</a></li>
                    <li className="navbar__right-item"><a className="navbar__right-item--link"href="/">Lorem </a></li>
                </ul>
            </header>
    
    )
}
