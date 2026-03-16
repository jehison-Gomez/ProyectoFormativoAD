import axios from 'axios';

export const getAreas = async () => {
    try {
        const response = await axios.get('http://localhost:3000/area/listar');
        return response.data;
    } catch (error) {
        console.log('Error en getAreas:', error);
    }
};

export const getAreaById = async (id) => {
    try {
        const response = await axios.get(`http://localhost:3000/area/listar/${id}`);
        return response.data;
    } catch (error) {
        console.log('Error en getAreaById:', error);
    }
};

export const createArea = async (datos) => {
    try {
        const response = await axios.post('http://localhost:3000/area/crear', datos);
        return response.data;
    } catch (error) {
        console.log('Error en createArea:', error);
    }
};

export const updateArea = async (id, datos) => {
    try {
        const response = await axios.put(`http://localhost:3000/area/actualizar/${id}`, datos);
        return response.data;
    } catch (error) {
        console.log('Error en updateArea:', error);
    }
};

export const deleteArea = async (id) => {
    try {
        const response = await axios.delete(`http://localhost:3000/area/eliminar/${id}`);
        return response.data;
    } catch (error) {
        console.log('Error en deleteArea:', error);
    }
};
