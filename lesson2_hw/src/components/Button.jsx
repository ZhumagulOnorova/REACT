import React from 'react';

const Button = ({children,color,background}) => {
    return (
        <button
            style={{
                color,background
            }}
        >
            {children}
        </button>
    );
};

export default Button;