import React from 'react';
import { Boton } from '@/Components/atoms/Boton/Boton';
import styles from './FilaAcciones.module.css';

export const FilaAcciones = ({ onEditar, onEliminar, accionesExtra = [] }) => {
    return (
        <div className={styles.contenedor}>
            <Boton variante="editar" texto="Editar" onClick={onEditar} />
            <Boton variante="eliminar" texto="Eliminar" onClick={onEliminar} />
            {accionesExtra.map((accion, index) => (
                <Boton 
                    key={index}
                    variante={accion.variante}
                    texto={accion.texto}
                    onClick={accion.onClick}
                />
            ))}
        </div>
    );
};
