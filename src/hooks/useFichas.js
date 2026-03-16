import { useState, useEffect } from 'react';
import { getFichas, createFicha, updateFicha, deleteFicha } from '../services/fichaService';

export const useFichas = () => {
    const [listFicha, setListFicha] = useState([]);
    const [cargando, setCargando] = useState(true);

    const cargar = async () => {
        try {
            setCargando(true);
            const data = await getFichas();
            setListFicha(data);
        } catch (error) {
            console.log('Error al obtener fichas:', error);
        } finally {
            setCargando(false);
        }
    };

    const crear = async (datos) => {
        try {
            await createFicha(datos);
            cargar();
        } catch (error) {
            console.log('Error al crear ficha:', error);
        }
    };

    const actualizar = async (id, datos) => {
        try {
            await updateFicha(id, datos);
            cargar();
        } catch (error) {
            console.log('Error al actualizar ficha:', error);
        }
    };

    const eliminar = async (id) => {
        try {
            await deleteFicha(id);
            alert('Registro eliminado correctamente');
            cargar();
        } catch (error) {
            console.log('Error al eliminar ficha:', error);
        }
    };

    useEffect(() => {
        cargar();
    }, []);

    return { listFicha, cargando, crear, actualizar, eliminar };
};
