import React from 'react';

const Input = ({color,border, borderRadius}) => {
    
    return (
      <input
        style={{
          color,
          border,
          borderRadius
        }}
      />
    );
};

export default Input;