import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Logo } from '@/Components/atoms/Logo/Logo';
import { ItemMenu } from '@/Components/molecules/ItemMenu/ItemMenu';
import { FiBox, FiMap, FiFileText, FiUsers, FiBarChart, FiBell, FiArchive, FiCornerUpLeft, FiLogOut, FiFolder, FiChevronDown, FiChevronRight, FiChevronLeft, FiMenu, FiHome } from 'react-icons/fi';
import styles from './Sidebar.module.css';

export const Sidebar = ({ seccionActiva, onNavegar }) => {
  const navigate = useNavigate();
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

  const manejarNavegacion = (ruta) => {
    const rutas = {
      'dashboard': '/app/dashboard',
      'materiales': '/app/gestion/materiales',
      'areas': '/app/gestion/areas',
      'fichas': '/app/gestion/fichas',
      'usuarios': '/app/usuarios',
      'reportes': '/app/reportes',
      'notificaciones': '/app/notificaciones',
      // 'bodegas': '/app/bodegas',
      'devoluciones': '/app/devoluciones',
      'login': '/'
    };

    if (rutas[ruta]) {
      navigate(rutas[ruta]);
    } else if (onNavegar) {
      onNavegar(ruta);
    }
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
            icono={<FiHome />}
            texto="Dashboard"
            activo={seccionActiva === 'dashboard'}
            colapsado={colapsado}
            onClick={() => manejarNavegacion('dashboard')}
          />
        </div>
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
                onClick={() => manejarNavegacion('materiales')}
              />
              <ItemMenu
                icono={<FiMap />}
                texto="Areas"
                activo={seccionActiva === 'areas'}
                esSubmodulo={true}
                colapsado={colapsado}
                onClick={() => manejarNavegacion('areas')}
              />
              <ItemMenu
                icono={<FiFileText />}
                texto="Fichas"
                activo={seccionActiva === 'fichas'}
                esSubmodulo={true}
                colapsado={colapsado}
                onClick={() => manejarNavegacion('fichas')}
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
            onClick={() => manejarNavegacion('usuarios')}
          />
          <ItemMenu
            icono={<FiBarChart />}
            texto="Reportes"
            activo={seccionActiva === 'reportes'}
            colapsado={colapsado}
            onClick={() => manejarNavegacion('reportes')}
          />
          <ItemMenu
            icono={<FiBell />}
            texto="Notificaciones"
            activo={seccionActiva === 'notificaciones'}
            colapsado={colapsado}
            onClick={() => manejarNavegacion('notificaciones')}
          />
          {/* <ItemMenu
            icono={<FiArchive />}
            texto="Bodegas"
            activo={seccionActiva === 'bodegas'}
            colapsado={colapsado}
            onClick={() => manejarNavegacion('bodegas')}
          /> */}
          <ItemMenu
            icono={<FiCornerUpLeft />}
            texto="Devoluciones"
            activo={seccionActiva === 'devoluciones'}
            colapsado={colapsado}
            onClick={() => manejarNavegacion('devoluciones')}
          />
        </div>
      </nav>

      <div className={styles.footer}>
        <ItemMenu
          icono={<FiLogOut />}
          texto="Cerrar sesión"
          activo={false}
          colapsado={colapsado}
          onClick={() => manejarNavegacion('login')}
        />
      </div>
    </aside>
  );
};
