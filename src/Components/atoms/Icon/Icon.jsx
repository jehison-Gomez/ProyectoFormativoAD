import React from 'react';
import { FaBars } from 'react-icons/fa';

export default function Icon({ type, className = '' }) {
  
    const icons = {
    hamburger: FaBars,
  };

  const IconComponent = icons[type];

  if (!IconComponent) {
    return null;
  }

  return <IconComponent className={className} />;
}
