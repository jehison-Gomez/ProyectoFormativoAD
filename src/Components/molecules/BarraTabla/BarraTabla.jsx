import React from 'react';
import { InputBusqueda } from '@/Components/atoms/InputBusqueda/InputBusqueda';
import { Boton } from '@/Components/atoms/Boton/Boton';
import styles from './BarraTabla.module.css';

export const BarraTabla = ({ titulo, valorBusqueda, onBuscar, onVerTodas = null }) => {
    return (
        <div className={styles.contenedor}>
            <div className={styles.izquierdo}>
                <h2 className={styles.titulo}>{titulo}</h2>
                {onVerTodas && (
                    <Boton variante="texto" texto="Ver todas" onClick={onVerTodas} />
                )}
            </div>
            <InputBusqueda
                value={valorBusqueda}
                onChange={onBuscar}
                placeholder="Buscar..."
            />
        </div>
    );
};
