import React from 'react';
import { useNavigate } from 'react-router-dom';
import { LayoutLogin } from '../Components/templates/LayoutLogin/LayoutLogin';
import { FormularioLogin } from '../Components/organisms/FormularioLogin/FormularioLogin';

export const PaginaLogin = () => {
    const navigate = useNavigate();

    const handleLogin = (datos) => {
        console.log('Login attempt with:', datos);
        navigate('/app/dashboard');
    };

    return (
        <LayoutLogin imagenFondo="../../public/Fondo.jpg">
            <FormularioLogin onLogin={handleLogin} />
        </LayoutLogin>


    );
};
