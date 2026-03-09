import React from 'react';

export default function ModuleContent({ title }) {
  return (
    <div style={{ padding: '1.5rem 0' }}>
      <h3 style={{ 
        color: 'var(--accent)', 
        fontWeight: 600, 
        fontSize: '1.4rem', 
        marginBottom: '1rem' 
      }}>
        {title}
      </h3>
      <p style={{ color: '#e0e7ef', fontSize: '1.08rem' }}>
        Esta es la vista de <b>{title}</b>. Aquí podrás gestionar y visualizar la información correspondiente a este módulo.
      </p>
    </div>
  );
}
