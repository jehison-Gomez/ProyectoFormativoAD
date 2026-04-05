import { useState, useEffect } from 'react';
import { getUsuarios, createUsuario, updateUsuario, deleteUsuario } from '../services/usuarioService';

export const useUsuarios = () => {
    const [listUsuario, setListUsuario] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [usuarioEditando, setUsuarioEditando] = useState(null);

    const cargar = async () => {
        try {
            setCargando(true);
            const data = await getUsuarios();
            setListUsuario(data);
        } catch (error) {
            console.log('Error al obtener usuarios:', error);
        } finally {
            setCargando(false);
        }
    };

    const crear = async (datos) => {
        try {
            await createUsuario(datos);
            cargar();
        } catch (error) {
            console.log('Error al crear usuario:', error);
        }
    };

    const actualizar = async (id, datos) => {
        try {
            await updateUsuario(id, datos);
            cargar();
        } catch (error) {
            console.log('Error al actualizar usuario:', error);
        }
    };

    const eliminar = async (id) => {
        try {
            await deleteUsuario(id);
            alert('Registro eliminado correctamente');
            cargar();
        } catch (error) {
            console.log('Error al eliminar usuario:', error);
        }
    };

    const seleccionarParaEditar = (usuario) => {
        setUsuarioEditando(usuario);
    };

    const limpiarEdicion = () => {
        setUsuarioEditando(null);
    };

    useEffect(() => {
        cargar();
    }, []);

    return { 
        listUsuario, 
        cargando, 
        usuarioEditando,
        crear, 
        actualizar, 
        eliminar,
        seleccionarParaEditar,
        limpiarEdicion
    };
};
