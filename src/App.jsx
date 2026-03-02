import React from "react"
import { UserSection, ProfileWithActions } from "./Components/Organisms"

function App() {
  const users = [
    {
      id: 1,
      src: "https://i.pravatar.cc/100?img=1",
      alt: "Adriana",
      name: "Adriana",
      description: "Hola soy Adriana"
    }
   
  ]

  return (
    <div style={{ padding: "40px" }}>
      
      <h2>Usuarios</h2>
      <UserSection users={users} />

      <h2 style={{ marginTop: "40px" }}>Acciones</h2>
      <ProfileWithActions
        user={users[0]}
        editIcon={() => <span></span>}
        deleteIcon={() => <span></span>}
        onEdit={() => alert("Editar usuario")}
        onDelete={() => alert("Eliminar usuario")}
      />

    </div>
  )
}

export default App