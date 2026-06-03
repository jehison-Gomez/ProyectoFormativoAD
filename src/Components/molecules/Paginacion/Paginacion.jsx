import React from 'react';
import styles from './Paginacion.module.css';


export const Paginacion = ({ paginaActual, totalPaginas, onCambiar }) => {
    const paginas = Array.from({ length: totalPaginas }, (_, i) => i + 1);

    return (
        <div className={styles.contenedor}>
            <button
                className={styles.boton}
                onClick={() => onCambiar(paginaActual - 1)}
                disabled={paginaActual === 1}
            >
                &laquo;
            </button>


            {paginas.map(pag => (
                <button
                    key={pag}
                    className={`${styles.boton} ${pag === paginaActual ? styles.activo : ''}`}
                    onClick={() => onCambiar(pag)}
                >
                    {pag}
                </button>
            ))}

            <button
                className={styles.boton}
                onClick={() => onCambiar(paginaActual + 1)}
                disabled={paginaActual === totalPaginas}
            >
                &raquo;
            </button>
        </div>
    );
};
