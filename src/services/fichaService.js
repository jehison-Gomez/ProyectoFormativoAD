import axios from 'axios';

export const getFichas = async () => {
    try {
        const response = await axios.get('http://localhost:3000/ficha/listar');
        return response.data;
    } catch (error) {
        console.log('Error en getFichas:', error);
    }
};

export const deleteFicha = async (id) => {
    try {
        const response = await axios.delete(`http://localhost:3000/ficha/eliminar/${id}`);
        return response.data;
    } catch (error) {
        console.log('Error en deleteFicha:', error);
    }
};

export const createFicha = async (datos) => {
    try {
        const response = await axios.post('http://localhost:3000/ficha/crear', datos);
        return response.data;
    } catch (error) {
        console.log('Error en createFicha:', error);
    }
};

export const updateFicha = async (id, datos) => {
    try {
        const response = await axios.put(`http://localhost:3000/ficha/actualizar/${id}`, datos);
        return response.data;
    } catch (error) {
        console.log('Error en updateFicha:', error);
    }
};
