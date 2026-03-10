import React from 'react';
import { FilaAcciones } from '@/Components/molecules/FilaAcciones/FilaAcciones';
import { BadgeEstado } from '@/Components/atoms/BadgeEstado/BadgeEstado';
import styles from './TablaConAcciones.module.css';

export const TablaConAcciones = ({
    columnas = [],
    filas = [],
    onEditar,
    onEliminar,
    mostrarAcciones = true
}) => {
    return (
        <div className={styles.contenedor}>
            <table className={styles.tabla}>
                <thead>
                    <tr>
                        {columnas.map((col, idx) => (
                            <th key={idx}>{col.label}</th>
                        ))}
                        {mostrarAcciones && <th>Acciones</th>}
                    </tr>
                </thead>
                <tbody>
                    {filas.length === 0 ? (
                        <tr>
                            <td colSpan={columnas.length + (mostrarAcciones ? 1 : 0)} className={styles.sinDatos}>
                                No hay datos para mostrar
                            </td>
                        </tr>
                    ) : (
                        filas.map((fila, idx) => (
                            <tr key={idx}>
                                {columnas.map((col, colIdx) => {
                                    const valor = fila[col.key];
                                    if (col.key.toLowerCase() === 'estado') {
                                        return (
                                            <td key={colIdx}>
                                                <BadgeEstado estado={valor} />
                                            </td>
                                        );
                                    }
                                    return <td key={colIdx}>{valor}</td>;
                                })}
                                {mostrarAcciones && (
                                    <td>
                                        <FilaAcciones
                                            onEditar={() => onEditar && onEditar(fila)}
                                            onEliminar={() => onEliminar && onEliminar(fila)}
                                        />
                                    </td>
                                )}
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </div>
    );
};
