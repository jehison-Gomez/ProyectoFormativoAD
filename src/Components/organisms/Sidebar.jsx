import React, { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import MenuItem from '../molecules/MenuItem';
import Button from '../atoms/Button';
import '../Sidebar.css';

const modules = [
  {
    name: "Gestión",
    icon: "🗂️",
    submodules: [
      { name: "Materiales", route: "/gestion/materiales" },
      { name: "Usuarios", route: "/gestion/usuarios" },
    ],
    route: "/gestion",
  },
  {
    name: "Notificaciones",
    icon: "🔔",
    route: "/notificaciones",
  },
  {
    name: "Bodega",
    icon: "🏬",
    route: "/bodega",
  },
  {
    name: "Áreas",
    icon: "🏢",
    route: "/areas",
  },
  {
    name: "Fichas",
    icon: "📋",
    route: "/fichas",
  },
  {
    name: "Devoluciones",
    icon: "↩️",
    route: "/devoluciones",
  },
];

export default function Sidebar() {
  const [openModule, setOpenModule] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleModuleClick = (index) => {
    setOpenModule(openModule === index ? null : index);
  };

  const handleLogout = () => {
    window.location.href = '/';
  };

  const handleSubmoduleClick = () => {
    setOpenModule(null);
  };

  // Cerrar sidebar con tecla Escape
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape' || e.key === 'Esc') {
        setSidebarOpen(false);
      }
    };
    if (sidebarOpen) {
      document.addEventListener('keydown', onKey);
    }
    return () => document.removeEventListener('keydown', onKey);
  }, [sidebarOpen]);

  return (
    <>
      {/* Botón hamburguesa */}
      <button
        className={`sidebar-hamburger${sidebarOpen ? ' sidebar-hamburger-shifted' : ''}`}
        onClick={() => setSidebarOpen((v) => !v)}
        aria-label="Abrir menú"
        aria-expanded={sidebarOpen}
        title={sidebarOpen ? 'Cerrar menú' : 'Abrir menú'}
      >
        <FaBars />
      </button>
      
      {/* Panel lateral */}
      <aside 
        className={`sidebar${sidebarOpen ? ' open' : ''}`} 
        role="navigation" 
        aria-hidden={!sidebarOpen} 
        style={{ left: sidebarOpen ? 0 : '-270px', transition: 'left 0.25s' }}
      >
        <div className="sidebar-title">Menú Principal</div>
        <nav style={{ flex: 1 }}>
          <ul>
            {modules.map((mod, idx) => (
              <MenuItem
                key={mod.name}
                module={mod}
                isOpen={openModule === idx}
                onToggle={() => handleModuleClick(idx)}
                onSubmoduleClick={handleSubmoduleClick}
              />
            ))}
          </ul>
        </nav>
        
        {/* Botón de cierre de sesión */}
        <div style={{ padding: '1.5rem 1rem 1.5rem 1.5rem', borderTop: '1.5px solid var(--muted)', marginTop: 'auto' }}>
          <Button variant="logout" onClick={handleLogout} ariaLabel="Cerrar sesión">
            <span role="img" aria-label="logout" style={{ marginRight: 8 }}>🚪</span>
            Cerrar sesión
          </Button>
        </div>
      </aside>
      
      {/* Fondo para cerrar el menú al hacer click fuera */}
      {sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          style={{ 
            position: 'fixed', 
            top: 0, 
            left: 0, 
            width: '100vw', 
            height: '100vh', 
            background: 'rgba(0,0,0,0.15)', 
            zIndex: 1000 
          }}
        />
      )}
    </>
  );
}
