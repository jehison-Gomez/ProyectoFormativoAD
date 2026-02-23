import React from 'react'
import Avatar from '../Avatar/Avatar'
import Text from '../Text/Text'
import './ListItem.css'

/**
 * Molécula ListItem - Combina Avatar + Text
 * Elemento de lista con imagen de perfil y texto
 */
export default function ListItem({ src, alt, title, subtitle, className = "" }) {
  return (
    <div className={`list-item ${className}`}>
      <Avatar src={src} alt={alt} className="list-item-avatar" />
      <div className="list-item-content">
        <Text className="list-item-title">{title}</Text>
        {subtitle && <Text className="list-item-subtitle">{subtitle}</Text>}
      </div>
    </div>
  )
}
