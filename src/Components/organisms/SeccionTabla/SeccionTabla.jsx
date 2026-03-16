import React, { useState } from 'react';
import { BarraTabla } from '@/Components/molecules/BarraTabla/BarraTabla';
import { TablaConAcciones } from '@/Components/organisms/TablaConAcciones/TablaConAcciones';
import { Paginacion } from '@/Components/molecules/Paginacion/Paginacion';
import { Boton } from '@/Components/atoms/Boton/Boton';
import styles from './SeccionTabla.module.css';

export const SeccionTabla = ({
    titulo,
    columnas,
    filas,
    onEditar,
    onEliminar,
    accionesExtra = [],
    onAñadir,
    textoBotonAñadir,
    mostrarAcciones = true,
    onVerTodas
}) => {
    const [busqueda, setBusqueda] = useState('');
    const [paginaActual, setPaginaActual] = useState(1);
    const totalPaginas = 3; // Simulado

    return (
        <div className={styles.seccion}>
            <BarraTabla
                titulo={titulo}
                valorBusqueda={busqueda}
                onBuscar={setBusqueda}
                onVerTodas={onVerTodas}
            />

            <TablaConAcciones
                columnas={columnas}
                filas={filas}
                onEditar={onEditar}
                onEliminar={onEliminar}
                accionesExtra={accionesExtra}
                mostrarAcciones={mostrarAcciones}
            />

            <div className={styles.footerInfo}>
                <div className={styles.izq}>
                    {textoBotonAñadir && onAñadir && (
                        <Boton
                            variante="texto"
                            texto={textoBotonAñadir}
                            onClick={onAñadir}
                        />
                    )}
                </div>

                <div className={styles.der}>
                    <span className={styles.infoPagina}>Mostrando 1 a 10 de 30 entradas</span>
                    <Paginacion
                        paginaActual={paginaActual}
                        totalPaginas={totalPaginas}
                        onCambiar={setPaginaActual}
                    />
                </div>
            </div>
        </div>
    );
};
