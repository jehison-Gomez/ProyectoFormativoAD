import React, { useState } from 'react';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import styles from './InputPassword.module.css';

export const InputPassword = ({ label, value, onChange }) => {
    const [mostrar, setMostrar] = useState(false);

    return (
        <div className={styles.contenedor}>
            {label && <label className={styles.label}>{label}</label>}
            <div className={styles.inputWrapper}>
                <input
                    type={mostrar ? 'text' : 'password'}
                    className={styles.input}
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                />
                <button
                    type="button"
                    className={styles.botonOjo}
                    onClick={() => setMostrar(!mostrar)}
                    aria-label="Alternar visibilidad"
                >
                    {mostrar ? <FiEyeOff /> : <FiEye />}
                </button>
            </div>
        </div>
    );
};
