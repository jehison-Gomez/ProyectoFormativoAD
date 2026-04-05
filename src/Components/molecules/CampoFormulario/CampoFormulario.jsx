import React from 'react';
import { InputTexto } from '@/Components/atoms/InputTexto/InputTexto';
import styles from './CampoFormulario.module.css';

export const CampoFormulario = ({ label, placeholder, value, onChange, error, disabled = false, type = 'text' }) => {
    return (
        <div className={styles.contenedor}>
            <InputTexto
                label={label}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className={error ? styles.inputError : ''}
                disabled={disabled}
                tipo={type}
            />
            {error && <span className={styles.mensajeError}>{error}</span>}
        </div>
    );
};
