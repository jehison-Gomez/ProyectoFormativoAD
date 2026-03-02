import React from "react"
import { ListItem } from "../../Molecules"
import "./UserList.css"

export default function UserList({ users = [] }) {
  return (
    <section className="user-list">
      {users.map((user) => (
        <ListItem
          key={user.id}
          src={user.src}
          alt={user.alt}
          title={user.title}
          subtitle={user.subtitle}
        />
      ))}
    </section>
  )
}