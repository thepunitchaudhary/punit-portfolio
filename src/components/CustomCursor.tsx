import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

/**
 * A soft glow that trails the pointer. Only mounted on fine-pointer (mouse)
 * devices — see App.tsx — so it never interferes with touch scrolling.
 */
export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 })

  useEffect(() => {
    const onMove = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY })
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <motion.div
      className="pointer-events-none fixed z-[60] h-8 w-8 rounded-full mix-blend-screen"
      style={{
        background: 'radial-gradient(circle, rgba(139,92,246,0.5), transparent 70%)',
      }}
      animate={{ x: pos.x - 16, y: pos.y - 16 }}
      transition={{ type: 'spring', stiffness: 500, damping: 40, mass: 0.4 }}
    />
  )
}
