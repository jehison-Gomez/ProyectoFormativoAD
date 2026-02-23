import React from 'react'

export default function Avatar({ src, alt, className = "" }) {
  return (
    <div className={className}>
      <img src={src} alt={alt} />
    </div>
  )
}
