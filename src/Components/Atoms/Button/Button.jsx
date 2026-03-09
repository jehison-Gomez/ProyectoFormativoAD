import React from 'react';
import './Button.css';

const variants = {
    primary: 'primary-btn',
    secondary: 'secondary-btn',
    tertiary: 'tertiary-btn',
}

export default function Button({ 
  children, 
  onClick, 
  className = '', 
  variant = 'primary',
  ariaLabel,
  type = 'button'
}) {
  const variantClass = variants[variant] || variants['primary'];
  
  return (
    <button
      type={type}
      className={`${variantClass} ${className}`}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}
