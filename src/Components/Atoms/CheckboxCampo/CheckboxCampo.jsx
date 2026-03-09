import React from 'react';
import styles from './CheckboxCampo.module.css';

export const CheckboxCampo = ({ label, checked, onChange }) => {
    return (
        <label className={styles.contenedor}>
            <input
                type="checkbox"
                className={styles.checkbox}
                checked={checked}
                onChange={(e) => onChange(e.target.checked)}
            />
            <span className={styles.checkmark}></span>
            <span className={styles.label}>{label}</span>
        </label>
    );
};
