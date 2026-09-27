'use client'

export default function Hero() {
  const techLogos = [
    { name:'Claude API', src:'https://cdn.simpleicons.org/anthropic' },
    { name:'Next.js',    src:'https://cdn.simpleicons.org/nextdotjs' },
    { name:'FastAPI',    src:'https://cdn.simpleicons.org/fastapi' },
    { name:'Python',     src:'https://cdn.simpleicons.org/python' },
    { name:'React',      src:'https://cdn.simpleicons.org/react' },
    { name:'Docker',     src:'https://cdn.simpleicons.org/docker' },
    { name:'TypeScript', src:'https://cdn.simpleicons.org/typescript' },
    { name:'Vercel',     src:'https://cdn.simpleicons.org/vercel' },
  ]

  return (
    <section id="home" className="hero-section">

      {/* LEFT — text content */}
      <div className="hero-content" style={{ zIndex: 2 }}>

        <p style={{
          fontSize: '18px', fontWeight: '500',
          color: 'rgba(26,10,0,0.55)', marginBottom: '6px'
        }}>
          Hello 👋
        </p>

        <h2 className="hero-name-heading">
          Hi, I&apos;m{' '}
          <span style={{
            background: 'linear-gradient(135deg, #FF6B00, #FFD700)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            Ummay Kulsoom
          </span>
        </h2>

        <h3 className="hero-role-title">
          AI Engineer &amp; Full-Stack Developer
        </h3>

        <p style={{
          fontSize: '15px', color: 'rgba(26,10,0,0.65)',
          lineHeight: '1.8', maxWidth: '440px', marginBottom: '28px',
        }}>
         Specialized in building modern web applications,
         e-commerce platforms, and AI-powered systems.
         Expert in Next.js, React, Node.js, and cloud integrations.
        </p>

        {/* Tech logos row */}
        <div style={{
          display: 'flex', gap: '10px',
          flexWrap: 'wrap', marginBottom: '32px',
        }}>
          {techLogos.map((tech, i) => (
            <div key={tech.name} title={tech.name} style={{
              width: '44px', height: '44px',
              borderRadius: '12px',
              background: 'rgba(255,255,255,0.6)',
              backdropFilter: 'blur(12px)',
              border: '1px solid rgba(255,255,255,0.85)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              padding: '9px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.07), inset 0 1px 0 rgba(255,255,255,0.9)',
              transition: 'transform 0.2s, background 0.2s',
              animation: `fadeUp 0.4s ease ${i * 0.07}s both`,
            }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-5px) scale(1.15)'
                e.currentTarget.style.background = 'rgba(255,140,0,0.25)'
                e.currentTarget.style.border = '1px solid rgba(255,140,0,0.5)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)'
                e.currentTarget.style.background = 'rgba(255,255,255,0.1)'
                e.currentTarget.style.border = '1px solid rgba(255,255,255,0.2)'
              }}
            >
              <img
                src={tech.src}
                alt={tech.name}
                width={24}
                height={24}
                loading="lazy"
                decoding="async"
                style={{ objectFit:'contain' }}
              />
            </div>
          ))}
        </div>

        {/* CTA */}
        <a href="#contact" style={{
          display: 'inline-flex', alignItems: 'center', gap: '8px',
          padding: '13px 30px', borderRadius: '999px',
          background: 'linear-gradient(135deg,#FF8C00,#FFD700)',
          color: '#fff', fontWeight: '700', fontSize: '15px',
          textDecoration: 'none',
          boxShadow: '0 8px 24px rgba(255,140,0,0.4), inset 0 1px 0 rgba(255,255,255,0.3)',
          transition: 'transform 0.2s, box-shadow 0.2s',
        }}
          onMouseEnter={e => {
            e.currentTarget.style.transform='translateY(-3px)'
            e.currentTarget.style.boxShadow='0 16px 40px rgba(255,140,0,0.5)'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.transform='translateY(0)'
            e.currentTarget.style.boxShadow='0 8px 24px rgba(255,140,0,0.4)'
          }}
        >
          Contact Me →
        </a>

      </div>

      {/* RIGHT — glass profile + floating badges */}
      <div className="hero-image-col">

        {/* GLASSMORPHISM RECTANGLE */}
        <div style={{
          width: '100%',
          height: '100%',
          borderRadius: '28px',
          overflow: 'hidden',
          position: 'relative',
          zIndex: 2,
          background: 'rgba(255, 255, 255, 0.22)',
          backdropFilter: 'blur(24px) saturate(180%)',
          WebkitBackdropFilter: 'blur(24px) saturate(180%)',
          border: '2px solid rgba(255, 255, 255, 0.65)',
          boxShadow: `
            inset 0 2px 0 rgba(255,255,255,0.9),
            inset 0 -2px 0 rgba(0,0,0,0.04),
            0 24px 64px rgba(255,140,0,0.18),
            0 0 0 10px rgba(255,255,255,0.1)
          `,
        }}>
          <img
            src="/images/ummay-profile.png"
            alt="Ummay Kulsoom — AI Engineer & Full-Stack Developer"
            width={320}
            height={320}
            fetchPriority="high"
            decoding="async"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block',
            }}
          />
        </div>

        {/* Floating badge — Claude API */}
        <div className="hero-floating-badge" style={{
          position: 'absolute',
          top: '40px', left: '-10px',
          background: 'rgba(255,255,255,0.85)',
          backdropFilter: 'blur(16px)',
          border: '1px solid rgba(255,255,255,0.95)',
          borderRadius: '999px',
          padding: '8px 14px',
          display: 'flex', alignItems: 'center', gap: '8px',
          boxShadow: '0 4px 16px rgba(0,0,0,0.1)',
          animation: 'float1 4s ease-in-out infinite',
          zIndex: 10, whiteSpace: 'nowrap',
        }}>
          <img
            src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/anthropic.svg"
            alt="Anthropic"
            width={16}
            height={16}
            loading="lazy"
            decoding="async"
          />
          <span style={{fontSize:'12px', fontWeight:'700', color:'#1a0a00'}}>Claude API</span>
        </div>

        {/* Floating badge — Python */}
        <div className="hero-floating-badge" style={{
          position: 'absolute',
          top: '130px', right: '-20px',
          background: 'rgba(255,255,255,0.85)',
          backdropFilter: 'blur(16px)',
          border: '1px solid rgba(255,255,255,0.95)',
          borderRadius: '999px',
          padding: '8px 14px',
          display: 'flex', alignItems: 'center', gap: '8px',
          boxShadow: '0 4px 16px rgba(0,0,0,0.1)',
          animation: 'float2 5s ease-in-out infinite',
          zIndex: 10, whiteSpace: 'nowrap',
        }}>
          <img
            src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/python.svg"
            alt="Python"
            width={16}
            height={16}
            loading="lazy"
            decoding="async"
          />
          <span style={{fontSize:'12px', fontWeight:'700', color:'#1a0a00'}}>Python</span>
        </div>

        {/* Floating badge — FastAPI */}
        <div className="hero-floating-badge" style={{
          position: 'absolute',
          bottom: '50px', left: '-14px',
          background: 'rgba(255,255,255,0.85)',
          backdropFilter: 'blur(16px)',
          border: '1px solid rgba(255,255,255,0.95)',
          borderRadius: '999px',
          padding: '8px 14px',
          display: 'flex', alignItems: 'center', gap: '8px',
          boxShadow: '0 4px 16px rgba(0,0,0,0.1)',
          animation: 'float3 4.5s ease-in-out infinite',
          zIndex: 10, whiteSpace: 'nowrap',
        }}>
          <img
            src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/fastapi.svg"
            alt="FastAPI"
            width={16}
            height={16}
            loading="lazy"
            decoding="async"
          />
          <span style={{fontSize:'12px', fontWeight:'700', color:'#1a0a00'}}>FastAPI</span>
        </div>

      </div>
    </section>
  )
}
