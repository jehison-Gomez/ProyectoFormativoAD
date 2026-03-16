import axios from 'axios';

export const getUsuarios = async () => {
    try {
        const response = await axios.get('http://localhost:3000/usuario/listar');
        return response.data;
    } catch (error) {
        console.log('Error en getUsuarios:', error);
    }
};

export const deleteUsuario = async (id) => {
    try {
        const response = await axios.delete(`http://localhost:3000/usuario/eliminar/${id}`);
        return response.data;
    } catch (error) {
        console.log('Error en deleteUsuario:', error);
    }
};

export const createUsuario = async (datos) => {
    try {
        const response = await axios.post('http://localhost:3000/usuario/crear', datos);
        return response.data;
    } catch (error) {
        console.log('Error en createUsuario:', error);
    }
};

export const updateUsuario = async (id, datos) => {
    try {
        const response = await axios.put(`http://localhost:3000/usuario/actualizar/${id}`, datos);
        return response.data;
    } catch (error) {
        console.log('Error en updateUsuario:', error);
    }
};
