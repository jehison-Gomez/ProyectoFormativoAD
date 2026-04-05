import axios from 'axios';

export const getBodegas = async () => {
    try {
        const response = await axios.get('http://localhost:3000/bodega/listar');
        return response.data;
    } catch (error) {
        console.log('Error en getBodegas:', error);
    }
};

export const getBodegasPorArea = async (idArea) => {
    try {
        const response = await axios.get(`http://localhost:3000/bodega/solo/${idArea}`);
        return response.data;
    } catch (error) {
        console.log('Error en getBodegasPorArea:', error);
    }
};

export const deleteBodega = async (id) => {
    try {
        const response = await axios.delete(`http://localhost:3000/bodega/eliminar/${id}`);
        return response.data;
    } catch (error) {
        console.log('Error en deleteBodega:', error);
    }
};

export const createBodega = async (datos) => {
    try {
        const response = await fetch('http://localhost:3000/bodega/crear', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(datos)
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.log('Error en createBodega:', error);
    }
};

export const updateBodega = async (id, datos) => {
    try {
        const response = await axios.put(`http://localhost:3000/bodega/actualizar/${id}`, datos);
        return response.data;
    } catch (error) {
        console.log('Error en updateBodega:', error);
    }
};
