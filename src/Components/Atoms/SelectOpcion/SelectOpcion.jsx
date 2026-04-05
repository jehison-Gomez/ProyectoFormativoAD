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
                    {opciones.map(op => 
                        typeof op === 'string'
                            ? <option key={op} value={op}>{op}</option>
                            : <option key={op.valor} value={op.valor}>{op.label}</option>
                    )}
                </select>
            </div>
        </div>
    );
};
