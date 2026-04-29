'use client'

export default function Contact() {
  return (
    <section id="contact" style={{
      padding: '80px 24px',
      display: 'flex',
      justifyContent: 'center',
      position: 'relative',
      zIndex: 1,
    }}>
      <div style={{
        width: '100%',
        maxWidth: '500px',
        borderRadius: '28px',
        background: 'rgba(255, 255, 255, 0.5)',
        backdropFilter: 'blur(40px) saturate(200%)',
        WebkitBackdropFilter: 'blur(40px) saturate(200%)',
        border: '1px solid rgba(255, 255, 255, 0.88)',
        boxShadow: `
          inset 0 1px 0 rgba(255,255,255,0.98),
          inset 0 -1px 0 rgba(0,0,0,0.02),
          0 20px 60px rgba(0,0,0,0.08),
          0 4px 12px rgba(0,0,0,0.04)
        `,
        padding: '44px 36px',
        position: 'relative',
        overflow: 'hidden',
      }}>

        {/* Inner shine — top edge */}
        <div style={{
          position: 'absolute',
          top: 0, left: '10%',
          width: '80%', height: '1px',
          background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.95), transparent)',
          pointerEvents: 'none',
        }}/>

        <h2 style={{
          textAlign: 'center',
          fontSize: '28px',
          fontWeight: '900',
          marginBottom: '8px',
          letterSpacing: '0.04em',
        }}>
          LET&apos;S WORK TOGETHER
        </h2>

        <p style={{
          textAlign: 'center',
          color: 'rgba(26,10,0,0.6)',
          fontSize: '14px',
          marginBottom: '36px',
        }}>
          Have a project in mind? Let&apos;s build something great.
        </p>

        {/* Name + Email row */}
        <div className="contact-form-row">
          <input
            type="text"
            placeholder="Name"
            style={{
              flex: 1,
              padding: '14px 18px',
              borderRadius: '14px',
              background: 'rgba(255,255,255,0.65)',
              border: '1px solid rgba(255,140,0,0.25)',
              color: '#1a0a00',
              fontSize: '14px',
              outline: 'none',
              transition: 'border 0.2s',
            }}
            onFocus={e => e.target.style.border = '1px solid rgba(255,140,0,0.6)'}
            onBlur={e => e.target.style.border = '1px solid rgba(255,140,0,0.25)'}
          />
          <input
            type="email"
            placeholder="Email"
            style={{
              flex: 1,
              padding: '14px 18px',
              borderRadius: '14px',
              background: 'rgba(255,255,255,0.65)',
              border: '1px solid rgba(255,140,0,0.25)',
              color: '#1a0a00',
              fontSize: '14px',
              outline: 'none',
              transition: 'border 0.2s',
            }}
            onFocus={e => e.target.style.border = '1px solid rgba(255,140,0,0.6)'}
            onBlur={e => e.target.style.border = '1px solid rgba(255,140,0,0.25)'}
          />
        </div>

        {/* Message */}
        <textarea
          placeholder="Message"
          rows={5}
          style={{
            width: '100%',
            padding: '14px 18px',
            borderRadius: '14px',
            background: 'rgba(255,255,255,0.65)',
            border: '1px solid rgba(255,140,0,0.25)',
            color: '#1a0a00',
            fontSize: '14px',
            outline: 'none',
            resize: 'none',
            marginBottom: '20px',
            transition: 'border 0.2s',
            boxSizing: 'border-box',
          }}
          onFocus={e => e.target.style.border = '1px solid rgba(255,140,0,0.6)'}
          onBlur={e => e.target.style.border = '1px solid rgba(255,140,0,0.25)'}
        />

        {/* Send button */}
        <button style={{
          width: '100%',
          padding: '15px',
          borderRadius: '14px',
          background: 'linear-gradient(135deg,#FF8C00,#FFD700)',
          border: 'none',
          color: '#fff',
          fontSize: '15px',
          fontWeight: '800',
          letterSpacing: '0.1em',
          cursor: 'pointer',
          boxShadow: '0 8px 24px rgba(255,140,0,0.35), inset 0 1px 0 rgba(255,255,255,0.3)',
          transition: 'transform 0.2s, box-shadow 0.2s',
        }}
          onMouseEnter={e => {
            e.currentTarget.style.transform = 'translateY(-2px)'
            e.currentTarget.style.boxShadow = '0 16px 40px rgba(255,140,0,0.45)'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.transform = 'translateY(0)'
            e.currentTarget.style.boxShadow = '0 8px 24px rgba(255,140,0,0.35)'
          }}
        >
          SEND
        </button>

        {/* Social icons row */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '16px',
          marginTop: '28px',
        }}>
          {[
            { href:'https://linkedin.com/in/ummay-kulsoom', img:'/images/social/linkedin-3d.jpg' },
            { href:'https://twitter.com/codecrafftai324', img:'/images/social/twitter-3d.jpg' },
          ].map((s, i) => (
            <a key={i} href={s.href} target="_blank" rel="noopener noreferrer"
              style={{
                width: '40px', height: '40px', borderRadius: '50%', overflow: 'hidden',
                boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                transition: 'transform 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.15) translateY(-3px)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'scale(1) translateY(0)'}
            >
              <img
                src={s.img}
                alt={s.href.includes('linkedin') ? 'LinkedIn' : 'Twitter'}
                width={40}
                height={40}
                loading="lazy"
                decoding="async"
                style={{ width:'100%', height:'100%', objectFit:'cover' }}
              />
            </a>
          ))}
          <a href="https://github.com/Ummay480" target="_blank" rel="noopener noreferrer"
            style={{
              width: '40px', height: '40px', borderRadius: '50%',
              background: 'radial-gradient(circle at 30% 30%, #555 0%, #24292e 60%, #111 100%)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              boxShadow: '0 4px 12px rgba(0,0,0,0.25)',
              transition: 'transform 0.2s',
              textDecoration: 'none',
            }}
            onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.15) translateY(-3px)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'scale(1) translateY(0)'}
          >
            <i className="fab fa-github" style={{ color: '#fff', fontSize: '18px' }} />
          </a>
        </div>

        <p style={{
          textAlign: 'center',
          fontSize: '11px',
          color: 'rgba(26,10,0,0.3)',
          marginTop: '20px',
        }}>
          © 2026 Ummay Kulsoom. All Rights Reserved.
        </p>

      </div>
    </section>
  )
}
