import axios from 'axios';

const API_URL = 'http://localhost:3000/auth';

export const login = async (correo, contrasena) => {
    try {
        const response = await axios.post(`${API_URL}/signin`, {
            Correo: correo,
            Contrasena: contrasena
        });
        return response.data;
    } catch (error) {
        console.log('Error en login:', error);
        throw error;
    }
};
