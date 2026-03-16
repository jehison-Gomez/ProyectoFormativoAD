import React from 'react';
import { Sidebar } from '@/Components/organisms/Sidebar/Sidebar';
import { HeaderApp } from '@/Components/molecules/HeaderApp/HeaderApp';
import styles from './LayoutPrincipal.module.css';

export const LayoutPrincipal = ({
    seccionActiva,
    onNavegar,
    nombreUsuario,
    children
}) => {
    return (
        <div className={styles.layout}>
            <Sidebar seccionActiva={seccionActiva} onNavegar={onNavegar} />

            <div className={styles.contenidoPrincipal}>
                <HeaderApp nombreUsuario={nombreUsuario} />

                <main className={styles.main}>
                    {children}
                </main>
            </div>
        </div>
    );
};
