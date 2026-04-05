import React from 'react';
import styles from './AvatarUsuario.module.css';

export const AvatarUsuario = ({ nombre }) => {
    // Obtener iniciales (ej: "Admin" -> "JG")
    const iniciales = nombre
        ? nombre.split(' ').slice(0, 2).map(n => n[0]).join('').toUpperCase()
        : 'U';

    return (
        <div className={styles.contenedor}>
            <div className={styles.circulo}>
                {iniciales}
            </div>
            <span className={styles.nombre}>{nombre}</span>
        </div>
    );
};
