import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LayoutPrincipal } from '../Components/templates/LayoutPrincipal/LayoutPrincipal';
import ModuleContent from '../Components/molecules/ModuleContent/ModuleContent';

export const PaginaNotificaciones = () => {
    const navigate = useNavigate();

    const handleNavegar = (ruta) => {
        navigate(`/app/${ruta}`);
        console.log("ruta enviada:", ruta);
        console.log("ruta final:", `/app/gestion/${ruta}`);
    };

    return (
        <LayoutPrincipal
            seccionActiva="notificaciones"
            onNavegar={handleNavegar}
            nombreUsuario="Junior García"
        >
           <ModuleContent />
        </LayoutPrincipal>
    );
};
