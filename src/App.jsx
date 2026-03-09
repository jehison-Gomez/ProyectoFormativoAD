import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { PaginaLogin } from './pages/PaginaLogin';
import { PaginaMateriales } from './pages/PaginaMateriales';
import { PaginaAreas } from './pages/PaginaAreas';
import { PaginaFichas } from './pages/PaginaFichas';
import { PaginaUsuarios } from './pages/PaginaUsuarios';
import { PaginaBodegas } from './pages/PaginaBodegas';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PaginaLogin />} />
        <Route path="/gestion/materiales" element={<PaginaMateriales />} />
        <Route path="/gestion/areas" element={<PaginaAreas />} />
        <Route path="/gestion/fichas" element={<PaginaFichas />} />
        <Route path="/gestion/usuarios" element={<PaginaUsuarios />} />
        <Route path="/gestion/bodegas" element={<PaginaBodegas />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
