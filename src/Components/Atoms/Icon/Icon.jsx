import React from 'react'

export default function Icon({ icon: IconCompo, className = "" }) {
  return (
    <div className={className}>
      <IconCompo />
    </div>
  )
}
