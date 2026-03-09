import React from "react"
import Text from "../../Atoms/Text/Text"
import "./Topbar.css"

export default function Topbar({ userName, userInitials, onMenuClick }) {
  return (
    <header className="topbar">
      <div className="topbar-left">
        <button className="topbar-menu-btn" onClick={onMenuClick}>
          ☰
        </button>
      </div>
      <div className="topbar-user">
        <div className="topbar-avatar-initials">
          <Text>{userInitials}</Text>
        </div>
        <Text className="topbar-username">{userName}</Text>
      </div>
    </header>
  )
}