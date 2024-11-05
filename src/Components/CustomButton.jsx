import React from 'react';

const CustomButton = ({ type, buttonText, width, disable }) => {
  return (
    <button 
      type={type} 
      className={`btn btn-dark w-${width} ${disable ? 'disabled' : ''}`} 
      disabled={disable}
    >
      {buttonText}
    </button>
  );
};

export default CustomButton;
