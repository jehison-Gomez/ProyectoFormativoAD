import React, { useState } from "react"
import Sidebar from "./Components/Organisms/Sidebar/Sidebar"
import Topbar from "./Components/Organisms/Topbar/Topbar"
import "./App.css"

function App() {
  const [activeItem, setActiveItem] = useState("Dashboard")
  const [sidebarVisible, setSidebarVisible] = useState(true)

  return (
    <div className="app-layout">
      {sidebarVisible && (
        <Sidebar
          activeItem={activeItem}
          onItemClick={setActiveItem}
        />
      )}
      <div className="app-main">
        <Topbar
          userName="Junior Garcia"
          userInitials="JG"
          onMenuClick={() => setSidebarVisible(!sidebarVisible)}
        />
        <main className="app-content">
          <h1 className="app-title">Hola {activeItem}</h1>
        </main>
      </div>
    </div>
  )
}

export default App