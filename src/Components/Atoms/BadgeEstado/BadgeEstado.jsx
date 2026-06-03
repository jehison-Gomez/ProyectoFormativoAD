import React from 'react';
import styles from './BadgeEstado.module.css';

export const BadgeEstado = ({ estado }) => {
    const isActivo = estado?.toLowerCase() === 'activo';

    return (
        <span className={`${styles.badge} ${isActivo ? styles.activo : styles.inactivo}`}>
            {estado}


            
        </span>
    );
};
