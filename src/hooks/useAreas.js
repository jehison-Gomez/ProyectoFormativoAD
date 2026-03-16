import { useState, useEffect } from 'react';
import { getAreas, createArea, updateArea, deleteArea } from '../services/areaService';

export const useAreas = () => {
    const [listArea, setListArea] = useState([]);
    const [cargando, setCargando] = useState(false);
    const [areaEditando, setAreaEditando] = useState(null);
    const [paginaActual, setPaginaActual] = useState(1);
    const [busqueda, setBusqueda] = useState('');
    const elementosPorPagina = 10;

    const areasFiltradas = listArea.filter(area =>
        Object.values(area).some(valor =>
            String(valor !== null && valor !== undefined ? valor : '').toLowerCase().includes(busqueda.toLowerCase())
        )
    );

    const totalPaginas = Math.max(1, Math.ceil(areasFiltradas.length / elementosPorPagina));
    const areasPaginadas = areasFiltradas.slice(
        (paginaActual - 1) * elementosPorPagina,
        paginaActual * elementosPorPagina
    );

    const cambiarPagina = (numeroPagina) => {
        if (numeroPagina >= 1 && numeroPagina <= totalPaginas) {
            setPaginaActual(numeroPagina);
        }
    };

    const cambiarBusqueda = (texto) => {
        setBusqueda(texto);
        setPaginaActual(1);
    };

    const cargar = async () => {
        try {
            setCargando(true);
            const data = await getAreas();
            setListArea(data || []);
        } catch (error) {
            console.log('Error al obtener áreas:', error);
        } finally {
            setCargando(false);
        }
    };

    const crear = async (datos) => {
        try {
            await createArea(datos);
            alert('Área creada correctamente');
            setPaginaActual(1);
            cargar();
        } catch (error) {
            console.log('Error al crear área:', error);
        }
    };

    const actualizar = async (id, datos) => {
        try {
            await updateArea(id, datos);
            alert('Área actualizada correctamente');
            setPaginaActual(1);
            cargar();
        } catch (error) {
            console.log('Error al actualizar área:', error);
        }
    };

    const eliminar = async (id) => {
        try {
            await deleteArea(id);
            alert('Área eliminada correctamente');
            setPaginaActual(1);
            cargar();
        } catch (error) {
            console.log('Error al eliminar área:', error);
        }
    };

    const seleccionarParaEditar = (area) => {
        setAreaEditando(area);
    };

    const limpiarEdicion = () => {
        setAreaEditando(null);
    };

    useEffect(() => {
        cargar();
    }, []);

    return {
        listArea,
        cargando,
        areaEditando,
        crear,
        actualizar,
        eliminar,
        seleccionarParaEditar,
        limpiarEdicion,
        areasPaginadas,
        paginaActual,
        totalPaginas,
        cambiarPagina,
        busqueda,
        cambiarBusqueda,
        totalElementosFiltrados: areasFiltradas.length
    };
};
