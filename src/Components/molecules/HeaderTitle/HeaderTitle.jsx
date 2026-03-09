import React from 'react';

export default function HeaderTitle({ title, className = '' }) {
  if (!title) return null;
  
  return (
    <h2 className={`main-layout-title ${className}`}>
      {title}
    </h2>
  );
}
