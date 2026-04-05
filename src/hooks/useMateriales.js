import { useState, useEffect } from 'react';
import { getMateriales, getMaterialesPorBodega, createMaterial, updateMaterial, deleteMaterial } from '../services/materialService';

export const useMateriales = (idBodega = null) => {
    const [listMaterial, setListMaterial] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [materialEditando, setMaterialEditando] = useState(null);

    const cargar = async () => {
        try {
            setCargando(true);
            const data = idBodega ? await getMaterialesPorBodega(idBodega) : await getMateriales();
            const formattedData = data.map(item => ({
                ...item,
                Fecha_Vencimiento: item.Fecha_Vencimiento ? item.Fecha_Vencimiento.split('T')[0] : item.Fecha_Vencimiento
            }));
            setListMaterial(formattedData);
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

    const seleccionarParaEditar = (material) => {
        setMaterialEditando(material);
    };

    const limpiarEdicion = () => {
        setMaterialEditando(null);
    };

    useEffect(() => {
        cargar();
    }, [idBodega]);

    return { 
        listMaterial, 
        cargando, 
        materialEditando,
        crear, 
        actualizar, 
        eliminar,
        seleccionarParaEditar,
        limpiarEdicion
    };
};
