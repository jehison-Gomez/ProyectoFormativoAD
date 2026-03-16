import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { LayoutPrincipal } from '../Components/templates/LayoutPrincipal/LayoutPrincipal';
import { SeccionTabla } from '../Components/organisms/SeccionTabla/SeccionTabla';
import { useBodegas } from '../hooks/useBodegas';

export const PaginaBodegas = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const idArea = params.get('area');

    const { listBodega, cargando, eliminar } = useBodegas(idArea);

    const columnas = [
        { key: 'ID_Bodega', label: 'ID Bodega' },
        { key: 'Nombre_Bodega', label: 'Nombre' },
        { key: 'FK_ID_Area', label: 'ID Area' }
    ];

    const handleNavegar = (ruta) => {
        navigate(`/app/${ruta}`);
    };

    const handleAñadir = () => {
        console.log('Actualizar Stock');
    };

    return (
        <LayoutPrincipal
            seccionActiva="bodegas"
            onNavegar={handleNavegar}
            nombreUsuario="Junior García"
        >
            {cargando ? (
                <p>Cargando...</p>
            ) : (
                <SeccionTabla
                    titulo={idArea ? `Bodegas del Área #${idArea}` : "Lista de Bodegas"}
                    columnas={columnas}
                    filas={listBodega}
                    onVerTodas={idArea ? () => navigate('/app/bodegas') : undefined}
                    onAñadir={handleAñadir}
                    textoBotonAñadir="Actualizar Stock"
                    mostrarAcciones={true}
                    onEliminar={(fila) => eliminar(fila.ID_Bodega)}
                />
            )}
        </LayoutPrincipal>
    );
};
