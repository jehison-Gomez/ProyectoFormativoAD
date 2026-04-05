import { useState, useEffect } from 'react';
import { getBodegas, getBodegasPorArea, createBodega, updateBodega, deleteBodega } from '../services/bodegaService';

export const useBodegas = (idArea = null) => {
    const [listBodega, setListBodega] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [bodegaEditando, setBodegaEditando] = useState(null);

    const cargar = async () => {
        try {
            setCargando(true);
            const data = idArea ? await getBodegasPorArea(idArea) : await getBodegas();
            setListBodega(data);
        } catch (error) {
            console.log('Error al obtener bodegas:', error);
        } finally {
            setCargando(false);
        }
    };

    const crear = async (datos) => {
        try {
            await createBodega(datos);
            alert('Bodega creada correctamente');
            cargar(); // recarga la lista
        } catch (error) {
            console.log('Error al crear bodega:', error);
        }
    };

    const actualizar = async (id, datos) => {
        try {
            await updateBodega(id, datos);
            cargar();
        } catch (error) {
            console.log('Error al actualizar bodega:', error);
        }
    };

    const eliminar = async (id) => {
        try {
            await deleteBodega(id);
            alert('Registro eliminado correctamente');
            cargar();
        } catch (error) {
            console.log('Error al eliminar bodega:', error);
        }
    };

    const seleccionarParaEditar = (bodega) => {
        setBodegaEditando(bodega);
    };

    const limpiarEdicion = () => {
        setBodegaEditando(null);
    };

    useEffect(() => {
        cargar();
    }, [idArea]);

    return { 
        listBodega, 
        cargando, 
        bodegaEditando,
        crear, 
        actualizar, 
        eliminar,
        seleccionarParaEditar,
        limpiarEdicion
    };
};
