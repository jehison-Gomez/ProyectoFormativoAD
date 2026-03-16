import { useState, useEffect } from 'react';
import { getMateriales, createMaterial, updateMaterial, deleteMaterial } from '../services/materialService';

export const useMateriales = () => {
    const [listMaterial, setListMaterial] = useState([]);
    const [cargando, setCargando] = useState(true);

    const cargar = async () => {
        try {
            setCargando(true);
            const data = await getMateriales();
            setListMaterial(data);
        } catch (error) {
            console.log('Error al obtener materiales:', error);
        } finally {
            setCargando(false);
        }
    };

    const crear = async (datos) => {
        try {
            await createMaterial(datos);
            cargar();
        } catch (error) {
            console.log('Error al crear material:', error);
        }
    };

    const actualizar = async (id, datos) => {
        try {
            await updateMaterial(id, datos);
            cargar();
        } catch (error) {
            console.log('Error al actualizar material:', error);
        }
    };

    const eliminar = async (id) => {
        try {
            await deleteMaterial(id);
            alert('Registro eliminado correctamente');
            cargar();
        } catch (error) {
            console.log('Error al eliminar material:', error);
        }
    };

    useEffect(() => {
        cargar();
    }, []);

    return { listMaterial, cargando, crear, actualizar, eliminar };
};
