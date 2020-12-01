import React from 'react'
import { NavLink } from "react-router-dom";

export const Navbar = () => {

    return (
        
            <header onScrollCapture className="navbar">
                <h1 className="navbar__left">
                    medH
                </h1>
                <ul className="navbar__right">
                    <li className="navbar__right-item"><NavLink className="navbar__right-item--link" to="/">What is it ?</NavLink></li>
                    <li className="navbar__right-item"><NavLink className="navbar__right-item--link" to="/dashboard">Lorem </NavLink></li>
                </ul>
            </header>
    
    )
}
