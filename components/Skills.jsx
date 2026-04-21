'use client'

const outerLogos = [
  { name:'Next.js',    icon:'https://cdn.simpleicons.org/nextdotjs' },
  { name:'React',      icon:'https://cdn.simpleicons.org/react' },
  { name:'Python',     icon:'https://cdn.simpleicons.org/python' },
  { name:'Docker',     icon:'https://cdn.simpleicons.org/docker' },
  { name:'PostgreSQL', icon:'https://cdn.simpleicons.org/postgresql' },
  { name:'GitHub',     icon:'https://cdn.simpleicons.org/github' },
  { name:'Vercel',     icon:'https://cdn.simpleicons.org/vercel' },
  { name:'Stripe',     icon:'https://cdn.simpleicons.org/stripe' },
]

const innerLogos = [
  { name:'Claude API', icon:'https://cdn.simpleicons.org/anthropic' },
  { name:'OpenAI',     icon:'https://cdn.simpleicons.org/openai' },
  { name:'FastAPI',    icon:'https://cdn.simpleicons.org/fastapi' },
  { name:'Tailwind',   icon:'https://cdn.simpleicons.org/tailwindcss' },
  { name:'Firebase',   icon:'https://cdn.simpleicons.org/firebase' },
]

export default function Skills() {
  return (
    <section id="skills" style={{
      padding: '80px 24px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '60px',
      maxWidth: '1200px',
      margin: '0 auto',
      flexWrap: 'wrap',
    }}>

      {/* LEFT — text content */}
      <div style={{ flex: 1, minWidth: '280px', maxWidth: '480px' }}>
        <p style={{
          fontSize: '12px', fontWeight: '700', color: '#FF8C00',
          letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '8px',
        }}>
          Technologies
        </p>
        <h2 style={{
          fontSize: '42px', fontWeight: '900', lineHeight: '1.2',
          marginBottom: '20px', color: '#1a0a00',
          WebkitTextFillColor: '#1a0a00',
          background: 'none', animation: 'none',
        }}>
          Work For All This<br/>
          <span style={{ color: '#FF8C00', WebkitTextFillColor: '#FF8C00' }}>Brand &amp; Client</span>
        </h2>
        <p style={{
          fontSize: '15px', color: '#5a3800', lineHeight: '1.8',
          marginBottom: '32px', maxWidth: '400px',
        }}>
          I build production-ready intelligent applications using modern
          AI tools and full-stack technologies trusted by global brands.
        </p>
        <a href="#contact" style={{
          display: 'inline-flex', alignItems: 'center', gap: '8px',
          padding: '12px 28px', borderRadius: '999px',
          background: 'linear-gradient(135deg,#FF8C00,#FFD700)',
          color: '#fff', WebkitTextFillColor: '#fff',
          fontWeight: '700', fontSize: '14px',
          textDecoration: 'none',
          boxShadow: '0 8px 24px rgba(255,140,0,0.35)',
        }}>
          details →
        </a>
      </div>

      {/* RIGHT — Spinning Circular Logo Layout */}
      <div style={{
        position: 'relative',
        width: '420px', height: '420px',
        flexShrink: 0,
      }}>

        {/* CENTER hub */}
        <div style={{
          position: 'absolute', top: '50%', left: '50%',
          transform: 'translate(-50%,-50%)',
          width: '120px', height: '120px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg,#FF8C00,#FFD700)',
          boxShadow: '0 0 0 16px rgba(255,165,0,0.08), 0 0 0 32px rgba(255,165,0,0.04)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          zIndex: 10,
        }}>
          <span style={{
            fontSize: '11px', fontWeight: '900',
            color: '#fff', WebkitTextFillColor: '#fff',
            textAlign: 'center', lineHeight: 1.3,
          }}>MY<br/>SKILLS</span>
        </div>

        {/* OUTER ring — spins clockwise */}
        <div style={{
          position: 'absolute', top: '50%', left: '50%',
          width: '380px', height: '380px',
          marginTop: '-190px', marginLeft: '-190px',
          borderRadius: '50%',
          animation: 'spinRing 20s linear infinite',
        }}>
          {outerLogos.map((logo, i) => {
            const angle = (i / outerLogos.length) * 360
            const rad = (angle * Math.PI) / 180
            const r = 190
            const x = r * Math.cos(rad)
            const y = r * Math.sin(rad)
            return (
              <div key={logo.name} style={{
                position: 'absolute',
                top: '50%', left: '50%',
                transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
              }}>
                <div style={{
                  animation: 'counterSpin 20s linear infinite',
                  width: '64px', height: '64px',
                  borderRadius: '50%',
                  background: '#fff',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.1), 0 2px 4px rgba(0,0,0,0.06)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  padding: '10px',
                }}>
                  <img src={logo.icon} alt={logo.name} width={38} height={38}
                    style={{ objectFit: 'contain' }} />
                </div>
              </div>
            )
          })}
        </div>

        {/* INNER ring — spins counter-clockwise */}
        <div style={{
          position: 'absolute', top: '50%', left: '50%',
          width: '240px', height: '240px',
          marginTop: '-120px', marginLeft: '-120px',
          borderRadius: '50%',
          animation: 'counterSpin 15s linear infinite',
        }}>
          {innerLogos.map((logo, i) => {
            const angle = (i / innerLogos.length) * 360
            const rad = (angle * Math.PI) / 180
            const r = 120
            const x = r * Math.cos(rad)
            const y = r * Math.sin(rad)
            return (
              <div key={logo.name} style={{
                position: 'absolute',
                top: '50%', left: '50%',
                transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
              }}>
                <div style={{
                  animation: 'spinRing 15s linear infinite',
                  width: '52px', height: '52px',
                  borderRadius: '50%',
                  background: '#fff',
                  boxShadow: '0 6px 16px rgba(0,0,0,0.1)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  padding: '8px',
                }}>
                  <img src={logo.icon} alt={logo.name} width={32} height={32}
                    style={{ objectFit: 'contain' }} />
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
