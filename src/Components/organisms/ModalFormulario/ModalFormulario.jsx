import React from 'react';
import { Boton } from '@/Components/atoms/Boton/Boton';
import { FiX } from 'react-icons/fi';
import styles from './ModalFormulario.module.css';

export const ModalFormulario = ({
    titulo,
    children,
    onGuardar,
    onCerrar,
    visible
}) => {
    if (!visible) return null;

    return (
        <div className={styles.overlay}>
            <div className={styles.modal}>
                <div className={styles.header}>
                    <h3 className={styles.titulo}>{titulo}</h3>
                    <button className={styles.botonCerrar} onClick={onCerrar}>
                        <FiX />
                    </button>
                </div>

                <div className={styles.body}>
                    {children}
                </div>

                <div className={styles.footer}>
                    <Boton
                        variante="texto"
                        texto="Cancelar"
                        onClick={onCerrar}
                    />
                    <Boton
                        variante="primario"
                        texto="Guardar"
                        onClick={onGuardar}
                    />
                </div>
            </div>
        </div>
    );
};
