import React from "react"
import { UserCard, IconButton } from "../../Molecules"
import "./ProfileWithActions.css"

export default function ProfileWithActions({
  user,
  editIcon,
  deleteIcon,
  onEdit,
  onDelete
}) {
  return (
    <section className="profile-with-actions">
      <UserCard
        src={user.src}
        alt={user.alt}
        name={user.name}
        description={user.description}
      />

      <div className="profile-actions">
        <IconButton icon={editIcon} onClick={onEdit}>
          Editar
        </IconButton>

        <IconButton icon={deleteIcon} onClick={onDelete}>
          Eliminar
        </IconButton>
      </div>
    </section>
  )
}