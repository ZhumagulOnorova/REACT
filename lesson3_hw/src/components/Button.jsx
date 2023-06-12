import React, { useState } from 'react';
import "./style.css"

const Button = ({children, color,backgroundColor}) => {
    const [bgColor, setBgColor] =useState('')

    const handleClick=(color)=>{
        setBgColor(color)
        document.body.style.backgroundColor=color}
    return (

        <button
            onClick={()=>handleClick(color)}
            style={{
                color,
                backgroundColor,
                bgColor:color
            }}
        >
            {children}
        </button>
    );
};

export default Button
