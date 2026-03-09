import React from "react"
import Button from "../../Atoms/Boton/Button"
import Text from "../../Atoms/Text/Text"
import "./Sidebar.css"

const navItems = [
  { label: "Dashboard", icon: null },
  { label: "Gestión", icon: null },
  { label: "Reportes", icon: null },
  { label: "Notificaciones", icon: null },
  { label: "Bodegas", icon: null },
  { label: "Devoluciones", icon: null },
]

export default function Sidebar({ activeItem, onItemClick, onLogout }) {
  return (
    <aside className="sidebar">
      <nav className="sidebar-nav">
        {navItems.map((item) => (
          <Button
            key={item.label}
            className={`sidebar-item ${activeItem === item.label ? "sidebar-item--active" : ""}`}
            onClick={() => onItemClick(item.label)}
          >
            {item.icon && <span className="sidebar-item-icon">{item.icon}</span>}
            <Text>{item.label}</Text>
          </Button>
        ))}
      </nav>

      <div className="sidebar-bottom">
        <Button className="sidebar-logout" onClick={onLogout}>
          <Text>Cerrar sesión</Text>
        </Button>
      </div>
    </aside>
  )
}