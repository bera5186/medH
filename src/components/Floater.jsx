import React from 'react'

// assets
import Checkmark from "../assets/checkmark.svg"

const Floater = ({top, right, left, bottom, color, text, width, animationTime}) => {

    

    return (
        <div className="floater float" style={{
            top: top, 
            right: right, 
            left: left, 
            bottom: bottom, 
            backgroundColor: color, 
            width: width,
            animation: `float ${animationTime} ease-in-out infinite`
        }}>
            <div className="floater__check">
                <img width="27px" height="27px" style={{ marginTop: "5px"}} src={Checkmark} alt="done" />
            </div>
            <div className="floater__text">
                {text}
            </div>
        </div>
    )
}

export default Floater
