'use client'
import { useEffect, useRef } from 'react'

const TOOLS = [
  {
    name: 'Claude Code',
    icon: '>_',
    isText: true,
    iconStyle: { fontFamily: 'monospace', fontWeight: 700, fontSize: '14px', color: '#e2e8f0' },
    bg: '#1e1e2e',
    nameColor: '#94a3b8',
  },
  {
    name: 'OpenClaw',
    icon: 'fas fa-spider',
    isText: false,
    iconStyle: { fontSize: '22px', color: '#ccfbf1' },
    bg: '#0f766e',
    nameColor: '#ccfbf1',
  },
  {
    name: 'n8n',
    icon: 'n8n',
    isText: true,
    iconStyle: { fontWeight: 800, fontSize: '16px', letterSpacing: '-0.5px', color: '#fff' },
    bg: '#ea580c',
    nameColor: '#fed7aa',
  },
  {
    name: 'Gemini CLI',
    icon: 'fas fa-gem',
    isText: false,
    iconStyle: { fontSize: '20px', color: '#4ade80' },
    bg: '#111827',
    nameColor: '#6b7280',
  },
]

const SIZE = 85
const R = SIZE / 2
const SPEED = 2

export default function BouncingBubbles() {
  const containerRef = useRef(null)
  const bubbleRefs = useRef([])

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const state = TOOLS.map((_, i) => {
      const cols = 2
      const col = i % cols
      const row = Math.floor(i / cols)
      return {
        x: R + 60 + col * 180,
        y: R + 60 + row * 180,
        vx: (Math.random() > 0.5 ? 1 : -1) * (SPEED + Math.random()),
        vy: (Math.random() > 0.5 ? 1 : -1) * (SPEED + Math.random()),
      }
    })

    let raf

    function tick() {
      const w = container.offsetWidth
      const h = container.offsetHeight

      // Wall bounce
      state.forEach(b => {
        b.x += b.vx
        b.y += b.vy
        if (b.x - R < 0)  { b.x = R;     b.vx =  Math.abs(b.vx) }
        if (b.x + R > w)  { b.x = w - R; b.vx = -Math.abs(b.vx) }
        if (b.y - R < 0)  { b.y = R;     b.vy =  Math.abs(b.vy) }
        if (b.y + R > h)  { b.y = h - R; b.vy = -Math.abs(b.vy) }
      })

      // Elastic bubble-bubble collision
      for (let i = 0; i < state.length; i++) {
        for (let j = i + 1; j < state.length; j++) {
          const a = state[i], b = state[j]
          const dx = b.x - a.x
          const dy = b.y - a.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < SIZE && dist > 0) {
            const nx = dx / dist
            const ny = dy / dist
            const dot = (a.vx - b.vx) * nx + (a.vy - b.vy) * ny
            if (dot > 0) {
              a.vx -= dot * nx; a.vy -= dot * ny
              b.vx += dot * nx; b.vy += dot * ny
            }
            const overlap = (SIZE - dist) / 2
            a.x -= overlap * nx; a.y -= overlap * ny
            b.x += overlap * nx; b.y += overlap * ny
          }
        }
      }

      // Apply to DOM
      state.forEach((b, i) => {
        const el = bubbleRefs.current[i]
        if (el) el.style.transform = `translate(${b.x - R}px, ${b.y - R}px)`
      })

      raf = requestAnimationFrame(tick)
    }

    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [])

  return (
    <div className="mt-16">
      <p className="text-center text-xs font-semibold tracking-widest uppercase text-gray-400 mb-4">Dev Tools</p>
      <div
        ref={containerRef}
        className="relative w-full rounded-2xl border-2 border-dashed border-gray-200 bg-gray-50 overflow-hidden"
            style={{ maxHeight: '400px', height: 'min(400px, 80vw)' }}
      >
        {TOOLS.map((tool, i) => (
          <div
            key={tool.name}
            ref={el => (bubbleRefs.current[i] = el)}
            className="absolute top-0 left-0 flex flex-col items-center justify-center rounded-full shadow-lg select-none cursor-default"
            style={{ width: SIZE, height: SIZE, background: tool.bg }}
          >
            {tool.isText ? (
              <span style={tool.iconStyle}>{tool.icon}</span>
            ) : (
              <i className={tool.icon} style={tool.iconStyle}></i>
            )}
            <span
              className="text-center leading-tight px-2 mt-1"
              style={{ fontSize: '9px', color: tool.nameColor }}
            >
              {tool.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
