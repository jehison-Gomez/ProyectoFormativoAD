import React from 'react';
import styles from './InputTexto.module.css';

export const InputTexto = ({ label, placeholder = '', value, onChange, tipo = 'text', className = '', disabled = false }) => {
    return (
        <div className={`${styles.contenedor} ${className}`}>
            {label && <label className={styles.label}>{label}</label>}
            <input
                type={tipo}
                className={styles.input}
                placeholder={placeholder}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                disabled={disabled}
            />
        </div>
    );
};
