import React from "react"
import Button from "../../Atoms/Boton/Button"
import Text from "../../Atoms/Text/Text"
import Icon from "../../Atoms/Icon/Icon"
import { MdDashboard, MdManageAccounts, MdAssessment, MdNotifications, MdWarehouse, MdAssignmentReturn } from "react-icons/md"
import "./Sidebar.css"

const navItems = [
  { label: "Dashboard",      icon: MdDashboard },
  { label: "Gestión",        icon: MdManageAccounts },
  { label: "Reportes",       icon: MdAssessment },
  { label: "Notificaciones", icon: MdNotifications },
  { label: "Bodegas",        icon: MdWarehouse },
  { label: "Devoluciones",   icon: MdAssignmentReturn },
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
            <Icon icon={item.icon} className="sidebar-item-icon" />
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