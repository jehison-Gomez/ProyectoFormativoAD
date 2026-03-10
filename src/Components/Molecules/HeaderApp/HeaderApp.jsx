import React from 'react';
import { AvatarUsuario } from '@/Components/atoms/AvatarUsuario/AvatarUsuario';
import styles from './HeaderApp.module.css';

export const HeaderApp = ({ nombreUsuario }) => {
    return (
        <header className={styles.header}>
            <div className={styles.contenedorAvatar}>
                <AvatarUsuario nombre={nombreUsuario} />
            </div>
        </header>
    );
};
