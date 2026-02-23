import React from 'react'
import Button from '../Boton/Button'
import Icon from '../Icon/Icon'
import './IconButton.css'

/**
 * Molécula IconButton - Combina Button + Icon
 * Botón que contiene un ícono junto con texto o solo ícono
 */
export default function IconButton({ 
  icon: IconComponent, 
  children, 
  onClick, 
  className = "",
  iconPosition = "left"
}) {
  return (
    <Button 
      onClick={onClick} 
      className={`icon-button ${className} icon-${iconPosition}`}
    >
      {iconPosition === "left" && IconComponent && (
        <span className="icon-button-icon"><IconComponent /></span>
      )}
      {children && <span className="icon-button-text">{children}</span>}
      {iconPosition === "right" && IconComponent && (
        <span className="icon-button-icon"><IconComponent /></span>
      )}
    </Button>
  )
}
