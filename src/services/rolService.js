import axios from 'axios';

const API_URL = 'http://localhost:3000/rol';

export const getRoles = async () => {
    try {
        const response = await axios.get(`${API_URL}/listar`);
        return response.data;
    } catch (error) {
        console.log('Error al obtener roles:', error);
        throw error;
    }
};
