'use client'

export default function About() {
  return (
    <section id="about">
      <div className="about-grid">

        {/* LEFT — About Me infographic in glass card */}
        <div className="about-image-col flex justify-center">
          <div style={{
            background: 'rgba(255,255,255,0.65)',
            backdropFilter: 'blur(20px) saturate(1.5)',
            WebkitBackdropFilter: 'blur(20px) saturate(1.5)',
            borderRadius: '20px',
            border: '1px solid rgba(255,255,255,0.9)',
            padding: '16px',
            boxShadow: '0 1px 0 rgba(255,255,255,0.95) inset, 0 20px 48px rgba(255,140,0,0.1), 0 8px 20px rgba(0,0,0,0.05)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            animation: 'float 5s ease-in-out infinite',
            width: '100%',
            maxWidth: '560px'
          }}>
            <img
              src="/images/about-me.png"
              alt="Why work with Ummay Kulsoom - fullstack expertise, AI-powered solutions, problem-solving mindset, reliable communication"
              width={768}
              height={447}
              loading="lazy"
              decoding="async"
              style={{
                width: '100%',
                height: 'auto',
                borderRadius: '12px',
                filter: 'brightness(1.02) saturate(1.1)'
              }}
            />
          </div>
        </div>

        {/* RIGHT — text content */}
        <div className="about-text-col space-y-6">
          <div>
            <p className="font-semibold text-lg mb-2" style={{color:'#FF8C00', WebkitTextFillColor:'#FF8C00'}}>About Me</p>
            <h2 className="text-4xl font-bold mb-4">Ummay Kulsoom</h2>
          </div>

          <p className="text-base leading-relaxed" style={{color:'#5a3800'}}>
            I'm an AI Automation Engineer and Full-Stack Developer who builds
            intelligent AI-powered applications, agents, and business automation
            solutions. Using Python, FastAPI, Next.js, and modern AI technologies,
            I turn complex business processes into simple, efficient, and scalable
            digital experiences.
          </p>

          <div className="space-y-3 text-sm" style={{color:'#7a4500'}}>
            <div className="flex items-center gap-2">
              <i className="fas fa-map-marker-alt" style={{color:'#FF8C00'}}></i>
              <span style={{color:'#7a4500'}}>Nishter Road, Karachi, Pakistan</span>
            </div>
            <div className="flex items-center gap-2">
              <i className="fas fa-phone" style={{color:'#FF8C00'}}></i>
              <span style={{color:'#7a4500'}}>0324 9208788</span>
            </div>
            <div className="flex items-center gap-2">
              <i className="fas fa-graduation-cap" style={{color:'#FF8C00'}}></i>
              <span style={{color:'#7a4500'}}>Graduate of Karachi University</span>
            </div>
          </div>

          {/* 4 colored buttons grid */}
          <div className="about-buttons-grid">
            <a href="#skills" className="about-btn btn-teal">
              <span>&lt;/&gt;</span> Skills
            </a>
            <a href="#about" className="about-btn btn-pink">
              <span>🎓</span> Education
            </a>
            <a href="#about" className="about-btn btn-orange">
              <span>✦</span> Certifications
            </a>
            <a href="#skills" className="about-btn btn-cyan">
              <span>📋</span> Expertise
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4 pt-4 border-t" style={{borderColor:'rgba(255,180,0,0.2)'}}>
            <div className="stat-card rounded-xl p-4">
              <div className="text-2xl font-bold gradient-text">20+</div>
              <div className="text-sm mt-1" style={{color:'#7a4500'}}>Total Projects</div>
            </div>
            <div className="stat-card rounded-xl p-4">
              <div className="text-2xl font-bold gradient-text">15+</div>
              <div className="text-sm mt-1" style={{color:'#7a4500'}}>Satisfied Clients</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
