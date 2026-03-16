import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { PaginaLogin } from './Pages/PaginaLogin';
import { PaginaDashboard } from './Pages/PaginaDashboard';
import { PaginaMateriales } from './Pages/PaginaMateriales';
import { PaginaAreas } from './Pages/PaginaAreas';
import { PaginaFichas } from './Pages/PaginaFichas';
import { PaginaUsuarios } from './Pages/PaginaUsuarios';
import { PaginaReportes } from './Pages/PaginaReportes';
import { PaginaNotificaciones } from './Pages/PaginaNotificaciones';
import { PaginaBodegas } from './Pages/PaginaBodegas';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PaginaLogin />} />
        <Route path="/app/dashboard" element={<PaginaDashboard />} />
        <Route path="/app/gestion/materiales" element={<PaginaMateriales />} />
        <Route path="/app/gestion/areas" element={<PaginaAreas />} />
        <Route path="/app/gestion/fichas" element={<PaginaFichas />} />
        <Route path="/app/usuarios" element={<PaginaUsuarios />} />
        <Route path="/app/reportes" element={<PaginaReportes />} />
        <Route path="/app/notificaciones" element={<PaginaNotificaciones />} />
        <Route path="/app/bodegas" element={<PaginaBodegas />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
