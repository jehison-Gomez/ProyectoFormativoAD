import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { LayoutPrincipal } from '../Components/templates/LayoutPrincipal/LayoutPrincipal';
import ModuleContent from '../Components/molecules/ModuleContent/ModuleContent';

export const PaginaReportes = () => {
    const navigate = useNavigate();

    const handleNavegar = (ruta) => {
        navigate(`/app/${ruta}`)
    };

  return (
    <LayoutPrincipal
        seccionActiva='reportes'
        onNavegar={handleNavegar}
        nombreUsuario='Junior García'
    >
      <ModuleContent />
    </LayoutPrincipal>
  );
};
