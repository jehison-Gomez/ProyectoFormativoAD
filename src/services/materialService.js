import axios from 'axios';

export const getMateriales = async () => {
    try {
        const response = await axios.get('http://localhost:3000/material/listar');
        return response.data;
    } catch (error) {
        console.log('Error en getMateriales:', error);
    }
};

export const deleteMaterial = async (id) => {
    try {
        const response = await axios.delete(`http://localhost:3000/material/eliminar/${id}`);
        return response.data;
    } catch (error) {
        console.log('Error en deleteMaterial:', error);
    }
};

export const createMaterial = async (datos) => {
    try {
        const response = await axios.post('http://localhost:3000/material/crear', datos);
        return response.data;
    } catch (error) {
        console.log('Error en createMaterial:', error);
    }
};

export const updateMaterial = async (id, datos) => {
    try {
        const response = await axios.put(`http://localhost:3000/material/actualizar/${id}`, datos);
        return response.data;
    } catch (error) {
        console.log('Error en updateMaterial:', error);
    }
};
