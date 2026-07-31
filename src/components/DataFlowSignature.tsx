import { motion } from 'framer-motion'
import { useMemo } from 'react'

/**
 * The page's signature element: a network of nodes and edges that pulse
 * data along connections, echoing "data pipeline" — Punit's actual domain —
 * rather than a generic decorative blob or particle field.
 */
export default function DataFlowSignature() {
  const nodes = useMemo(
    () => [
      { id: 'n1', x: 60, y: 90 },
      { id: 'n2', x: 200, y: 40 },
      { id: 'n3', x: 340, y: 110 },
      { id: 'n4', x: 150, y: 190 },
      { id: 'n5', x: 300, y: 220 },
      { id: 'n6', x: 430, y: 60 },
      { id: 'n7', x: 460, y: 190 },
      { id: 'n8', x: 20, y: 220 },
    ],
    [],
  )

  const edges = [
    ['n1', 'n2'],
    ['n2', 'n3'],
    ['n2', 'n4'],
    ['n3', 'n5'],
    ['n3', 'n6'],
    ['n4', 'n5'],
    ['n5', 'n7'],
    ['n6', 'n7'],
    ['n1', 'n8'],
    ['n4', 'n8'],
  ]

  const nodeMap = Object.fromEntries(nodes.map((n) => [n.id, n]))

  return (
    <svg
      viewBox="0 0 480 260"
      className="w-full h-full"
      aria-hidden="true"
      role="presentation"
    >
      <defs>
        <linearGradient id="edgeGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#8b5cf6" />
          <stop offset="100%" stopColor="#22d3ee" />
        </linearGradient>
        <radialGradient id="nodeGlow">
          <stop offset="0%" stopColor="#a78bfa" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#a78bfa" stopOpacity="0" />
        </radialGradient>
      </defs>

      {edges.map(([a, b], i) => {
        const from = nodeMap[a]
        const to = nodeMap[b]
        return (
          <g key={`${a}-${b}`}>
            <line
              x1={from.x}
              y1={from.y}
              x2={to.x}
              y2={to.y}
              stroke="url(#edgeGrad)"
              strokeOpacity={0.22}
              strokeWidth={1.5}
            />
            <motion.circle
              r={3}
              fill="#67e8f9"
              initial={{ opacity: 0 }}
              animate={{
                cx: [from.x, to.x],
                cy: [from.y, to.y],
                opacity: [0, 1, 1, 0],
              }}
              transition={{
                duration: 2.4,
                repeat: Infinity,
                repeatDelay: 1.2,
                delay: i * 0.35,
                ease: 'easeInOut',
              }}
            />
          </g>
        )
      })}

      {nodes.map((n, i) => (
        <g key={n.id}>
          <circle cx={n.x} cy={n.y} r={18} fill="url(#nodeGlow)" />
          <motion.circle
            cx={n.x}
            cy={n.y}
            r={4.5}
            fill="#f4f4f8"
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 3, repeat: Infinity, delay: i * 0.2, ease: 'easeInOut' }}
          />
        </g>
      ))}
    </svg>
  )
}
