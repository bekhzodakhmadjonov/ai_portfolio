'use client'

import { useState, useEffect } from 'react'

export function CustomCursor() {
const [position, setPosition] = useState({ x: 0, y: 0 })
const [isClient, setIsClient] = useState(false)

useEffect(() => {
  setIsClient(true)
  const handleMouseMove = (e: MouseEvent) => {
    setPosition({ x: e.clientX, y: e.clientY })
  }

  window.addEventListener('mousemove', handleMouseMove)

  return () => {
    window.removeEventListener('mousemove', handleMouseMove)
  }
}, [])

if (!isClient) {
  return null // Render nothing on the server
}

return (
  <div
    className="fixed inset-0 z-50 pointer-events-none"
    style={{
      transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
    }}
  >
    <div
      className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-300/50"
      style={{
        boxShadow: '0 0 30px 20px rgba(59, 130, 246, 0.4)', // Blue shadow
      }}
    />
  </div>
)
}
