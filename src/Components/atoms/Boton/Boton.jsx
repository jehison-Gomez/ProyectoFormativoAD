import React from 'react';
import styles from './Boton.module.css';

export const Boton = ({ variante = 'primario', texto, onClick, disabled = false }) => {
  return (
    <button
      className={`${styles.boton} ${styles[variante]}`}
      onClick={onClick}
      disabled={disabled}
    >
      {texto}
    </button>
  );
};
