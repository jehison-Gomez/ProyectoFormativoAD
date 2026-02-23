import React from 'react'
import Text from '../Text/Text'
import './Card.css'

/**
 * Molécula Card - Contenedor visual con título y contenido
 * Tarjeta genérica para mostrar contenido relacionado
 */
export default function Card({ title, children, className = "" }) {
  return (
    <div className={`card ${className}`}>
      {title && (
        <div className="card-header">
          <Text className="card-title">{title}</Text>
        </div>
      )}
      <div className="card-body">
        {children}
      </div>
    </div>
  )
}
