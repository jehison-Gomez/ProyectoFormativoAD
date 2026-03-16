import React from 'react';
import { Logo } from '@/Components/atoms/Logo/Logo';
import styles from './LayoutLogin.module.css';

export const LayoutLogin = ({ children, imagenFondo }) => {
    return (
        <div className={styles.layout}>
            <div
                className={styles.mitadIzq}
                style={{ backgroundImage: `url(${imagenFondo})` }}
            >
                <div className={styles.overlayText}>
                    <h1>SENA-Track</h1>
                    <p>Tu sistema de trazabilidad seguro.</p>
                </div>
            </div>

            <div className={styles.mitadDer}>
                <div className={styles.contenedorForm}>
                    <div className={styles.logoContenedor}>
                        <Logo />
                    </div>
                    {children}
                </div>
            </div>
        </div>
    );
};
