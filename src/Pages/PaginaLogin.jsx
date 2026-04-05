import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LayoutLogin } from '../Components/templates/LayoutLogin/LayoutLogin';
import { FormularioLogin } from '../Components/organisms/FormularioLogin/FormularioLogin';
import { login } from '../services/authService';

export const PaginaLogin = () => {
    const navigate = useNavigate();
    const [cargando, setCargando] = useState(false);
    const [error, setError] = useState(null);

    const handleLogin = async (datos) => {
        setCargando(true);
        setError(null);
        try {
            const data = await login(datos.usuario, datos.clave);
            
            // guardar token y user en localStorage
            localStorage.setItem('token', data.token);
            localStorage.setItem('user', JSON.stringify(data.user));
            navigate('/app/dashboard');
        } catch (err) {
            if (err.response && err.response.status === 400) {
                setError('Usuario no encontrado');
            } else if (err.response && err.response.status === 401) {
                setError('Contraseña incorrecta');
            } else {
                setError('Error al iniciar sesión');
            }
        } finally {
            setCargando(false);
        }
    };

    return (
        <LayoutLogin imagenFondo="../../public/Fondo.jpg">
            <FormularioLogin onLogin={handleLogin} cargando={cargando} error={error} />
        </LayoutLogin>
    );
};
