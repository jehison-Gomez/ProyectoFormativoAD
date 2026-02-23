import React from 'react'
import Avatar from '../Avatar/Avatar'
import Text from '../Text/Text'
import './UserCard.css'

/**
 * Molécula UserCard - Combina Avatar + Text + Text
 * Tarjeta de perfil de usuario con imagen, nombre y descripción
 */
export default function UserCard({ src, alt, name, description, className = "" }) {
  return (
    <div className={`user-card ${className}`}>
      <Avatar src={src} alt={alt} />
      <div className="user-card-info">
        <Text className="user-card-name">{name}</Text>
        <Text className="user-card-description">{description}</Text>
      </div>
    </div>
  )
}
