import React from 'react';
import styles from './SelectOpcion.module.css';

export const SelectOpcion = ({ label, opciones = [], value, onChange, className = '' }) => {
    return (
        <div className={`${styles.contenedor} ${className}`}>
            {label && <label className={styles.label}>{label}</label>}
            <div className={styles.selectWrapper}>
                <select
                    className={styles.select}
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                >
                    <option value="" disabled>Seleccione una opción</option>
                    {opciones.map((opcion, index) => (
                        <option key={index} value={opcion}>
                            {opcion}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
};
