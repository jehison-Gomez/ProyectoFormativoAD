import React from 'react';
import { FiSearch } from 'react-icons/fi';
import styles from './InputBusqueda.module.css';

export const InputBusqueda = ({ value, onChange, placeholder = 'Search' }) => {
    return (
        <div className={styles.contenedor}>
            <FiSearch className={styles.icono} />
            <input
                type="text"
                className={styles.input}
                placeholder={placeholder}
                value={value}
                onChange={(e) => onChange(e.target.value)}
            />
        </div>
    );
};
