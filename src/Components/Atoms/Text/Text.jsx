import React from 'react'

export default function Text({ children, className = "" }) {
  return (
    <div className={className}>
      {children}
    </div>
  )
}
