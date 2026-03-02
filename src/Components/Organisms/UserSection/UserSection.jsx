import React from "react"
import { Card, UserCard } from "../../Molecules"
import "./UserSection.css"

export default function UserSection({ users = [] }) {
  return (
    <section className="user-section">
      <Card title="Usuarios">
        <div className="user-section-grid">
          {users.map((user) => (
            <UserCard
              key={user.id}
              src={user.src}
              alt={user.alt}
              name={user.name}
              description={user.description}
            />
          ))}
        </div>
      </Card>
    </section>
  )
}