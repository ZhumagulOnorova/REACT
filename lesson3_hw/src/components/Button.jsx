import React from 'react';
import "./style.css"

const Button = ({children, color, borderRadius}) => {
   
    return (
        <button
            style={{
                color,
                borderRadius
            }}
        >
            {children}
        </button>
    );
};

export default Button;