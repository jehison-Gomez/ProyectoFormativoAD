import React, { useState } from 'react';
import { Logo } from '@/Components/atoms/Logo/Logo';
import { ItemMenu } from '@/Components/molecules/ItemMenu/ItemMenu';
import { FiBox, FiMap, FiFileText, FiUsers, FiBarChart, FiBell, FiArchive, FiCornerUpLeft, FiLogOut, FiFolder, FiChevronDown, FiChevronRight, FiChevronLeft, FiMenu } from 'react-icons/fi';
import styles from './Sidebar.module.css';

export const Sidebar = ({ seccionActiva, onNavegar }) => {
  const [colapsado, setColapsado] = useState(() => {
    const saved = localStorage.getItem('sidebar_colapsado');
    return saved !== null ? JSON.parse(saved) : false;
  });

  const [gestionAbierto, setGestionAbierto] = useState(() => {
    const guardado = localStorage.getItem('sidebar_gestion_abierto');
    return guardado !== null ? JSON.parse(guardado) : true;
  });

  const handleToggleColapsado = () => {
    const newVal = !colapsado;
    setColapsado(newVal);
    localStorage.setItem('sidebar_colapsado', JSON.stringify(newVal));
  };

  const toggleGestion = () => {
    if (colapsado) {
      setColapsado(false);
      localStorage.setItem('sidebar_colapsado', JSON.stringify(false));
      if (!gestionAbierto) {
        setGestionAbierto(true);
        localStorage.setItem('sidebar_gestion_abierto', JSON.stringify(true));
      }
      return;
    }
    const nuevoEstado = !gestionAbierto;
    setGestionAbierto(nuevoEstado);
    localStorage.setItem('sidebar_gestion_abierto', JSON.stringify(nuevoEstado));
  };

  return (
    <aside className={`${styles.sidebar} ${colapsado ? styles.colapsado : ''}`}>
      <div className={styles.header}>
        <Logo colapsado={colapsado} />
        <button className={styles.toggleBtn} onClick={handleToggleColapsado}>
          {colapsado ? <FiMenu /> : <FiChevronLeft />}
        </button>
      </div>

      <nav className={styles.nav}>
        <div className={styles.seccion}>
          <ItemMenu
            icono={<FiFolder />}
            texto={
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', minWidth: '150px' }}>
                <span>Gestión</span>
                {!colapsado && (gestionAbierto ? <FiChevronDown /> : <FiChevronRight />)}
              </div>
            }
            activo={false}
            colapsado={colapsado}
            onClick={toggleGestion}
          />
          {gestionAbierto && !colapsado && (
            <div className={styles.submodulos}>
              <ItemMenu
                icono={<FiBox />}
                texto="Materiales"
                activo={seccionActiva === 'materiales'}
                esSubmodulo={true}
                colapsado={colapsado}
                onClick={() => onNavegar('materiales')}
              />
              <ItemMenu
                icono={<FiMap />}
                texto="Areas"
                activo={seccionActiva === 'areas'}
                esSubmodulo={true}
                colapsado={colapsado}
                onClick={() => onNavegar('areas')}
              />
              <ItemMenu
                icono={<FiFileText />}
                texto="Fichas"
                activo={seccionActiva === 'fichas'}
                esSubmodulo={true}
                colapsado={colapsado}
                onClick={() => onNavegar('fichas')}
              />
            </div>
          )}
        </div>

        <div className={styles.seccion}>
          <ItemMenu
            icono={<FiUsers />}
            texto="Usuarios"
            activo={seccionActiva === 'usuarios'}
            colapsado={colapsado}
            onClick={() => onNavegar('usuarios')}
          />
          <ItemMenu
            icono={<FiBarChart />}
            texto="Reportes"
            activo={seccionActiva === 'reportes'}
            colapsado={colapsado}
            onClick={() => onNavegar('reportes')}
          />
          <ItemMenu
            icono={<FiBell />}
            texto="Notificaciones"
            activo={seccionActiva === 'notificaciones'}
            colapsado={colapsado}
            onClick={() => onNavegar('notificaciones')}
          />
          <ItemMenu
            icono={<FiArchive />}
            texto="Bodegas"
            activo={seccionActiva === 'bodegas'}
            colapsado={colapsado}
            onClick={() => onNavegar('bodegas')}
          />
          <ItemMenu
            icono={<FiCornerUpLeft />}
            texto="Devoluciones"
            activo={seccionActiva === 'devoluciones'}
            colapsado={colapsado}
            onClick={() => onNavegar('devoluciones')}
          />
        </div>
      </nav>

      <div className={styles.footer}>
        <ItemMenu
          icono={<FiLogOut />}
          texto="Cerrar sesión"
          activo={false}
          colapsado={colapsado}
          onClick={() => onNavegar('login')}
        />
      </div>
    </aside>
  );
};
