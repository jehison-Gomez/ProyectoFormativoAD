import React from 'react';
import { FiBarChart2 } from 'react-icons/fi';
import styles from './Logo.module.css';

export const Logo = ({ colapsado = false }) => {
    return (
        <div className={`${styles.contenedor} ${colapsado ? styles.colapsado : ''}`}>
            <FiBarChart2 className={styles.icono} />
            {!colapsado && (
                <div className={styles.textWrapper}>
                    <span className={styles.titulo}>SENA-Track</span>
                    <span className={styles.subtitulo}>SISTEMA DE TRAZABILIDAD PARA YAMBORO</span>
                </div>
            )}
        </div>
    );
};
