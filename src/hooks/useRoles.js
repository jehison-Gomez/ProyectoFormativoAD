import { useState, useEffect } from 'react';
import { getRoles } from '../services/rolService';

export const useRoles = () => {
    const [listRoles, setListRoles] = useState([]);

    const cargar = async () => {
        try {
            const data = await getRoles();
            setListRoles(data);
        } catch (error) {
            console.log('Error al cargar roles:', error);
        }
    };

    useEffect(() => {
        cargar();
    }, []);

    const getNombreRol = (idRol) => {
        const rol = listRoles.find(r => r.ID_Rol === idRol);
        return rol ? rol.Nombre_Rol : idRol;
    };

    return { 
        listRoles, 
        getNombreRol 
    };
};
