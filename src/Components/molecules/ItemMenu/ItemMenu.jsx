import React from 'react';
import styles from './ItemMenu.module.css';

export const ItemMenu = ({ icono, texto, activo, esSubmodulo = false, colapsado = false, onClick }) => {
    return (
        <button
            className={`${styles.item} ${activo ? styles.activo : ''} ${esSubmodulo ? styles.submodulo : ''} ${colapsado ? styles.colapsado : ''}`}
            onClick={onClick}
            title={typeof texto === 'string' && colapsado ? texto : undefined}
        >
            <span className={styles.icono}>{icono}</span>
            {!colapsado && <span className={styles.texto}>{texto}</span>}
        </button>
    );
};
