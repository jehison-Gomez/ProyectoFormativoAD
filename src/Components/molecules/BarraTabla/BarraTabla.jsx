import React from 'react';
import { InputBusqueda } from '@/Components/atoms/InputBusqueda/InputBusqueda';
import styles from './BarraTabla.module.css';

export const BarraTabla = ({ titulo, valorBusqueda, onBuscar }) => {
    return (
        <div className={styles.contenedor}>
            <h2 className={styles.titulo}>{titulo}</h2>
            <InputBusqueda
                value={valorBusqueda}
                onChange={onBuscar}
                placeholder="Buscar..."
            />
        </div>
    );
};
