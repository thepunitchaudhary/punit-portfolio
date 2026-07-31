import { useEffect, useRef, useState } from 'react'

/**
 * Animates a number from 0 to `target` once `start` becomes true.
 * Used to bring the About section's stats to life on scroll-into-view.
 */
export function useCountUp(target: number, start: boolean, duration = 1400) {
  const [value, setValue] = useState(0)
  const frame = useRef<number>()

  useEffect(() => {
    if (!start) return
    const startTime = performance.now()

    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1)
      // ease-out-cubic
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(Math.round(eased * target))
      if (progress < 1) {
        frame.current = requestAnimationFrame(tick)
      }
    }

    frame.current = requestAnimationFrame(tick)
    return () => {
      if (frame.current) cancelAnimationFrame(frame.current)
    }
  }, [start, target, duration])

  return value
}
