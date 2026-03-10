import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

export default function Link({ to, children, className = '', isActive = false, onClick }) {
  return (
    <RouterLink 
      to={to} 
      className={`${className}${isActive ? ' active' : ''}`}
      onClick={onClick}
    >
      {children}
    </RouterLink>
  );
}
