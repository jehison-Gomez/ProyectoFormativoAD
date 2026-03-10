import React from 'react';
import { InputTexto } from '@/Components/atoms/InputTexto/InputTexto';
import styles from './CampoFormulario.module.css';

export const CampoFormulario = ({ label, placeholder, value, onChange, error }) => {
    return (
        <div className={styles.contenedor}>
            <InputTexto
                label={label}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className={error ? styles.inputError : ''}
            />
            {error && <span className={styles.mensajeError}>{error}</span>}
        </div>
    );
};
