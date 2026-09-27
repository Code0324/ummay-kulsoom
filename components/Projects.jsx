'use client'

const realProjects = [
  {
    id: 1,
    title: "Luxe Living - Real Estate",
    category: "Full-Stack",
    icon: "fas fa-house",
    gradient: "linear-gradient(135deg, #fb923c, #f87171)",
    image: "/images/project/Luxe Living .png",
  },
  {
    id: 2,
    title: "FoodTuck - Restaurant Platform",
    category: "Full-Stack",
    icon: "fas fa-utensils",
    gradient: "linear-gradient(135deg, #818cf8, #c084fc)",
    image: "/images/project/foodTuck Resturant Plateform.png",
  },
  {
    id: 3,
    title: "Home Appliances E-Commerce",
    category: "Full-Stack",
    icon: "fas fa-plug",
    gradient: "linear-gradient(135deg, #60a5fa, #22d3ee)",
    image: "/images/project/Home Appliences.png",
  },
  {
    id: 4,
    title: "Portfolio Website",
    category: "Full-Stack",
    icon: "fas fa-palette",
    gradient: "linear-gradient(135deg, #f472b6, #fb7185)",
    image: "/images/project/Portfolio Website.png",
  },
  {
    id: 5,
    title: "E-Commerce Platform",
    category: "Full-Stack",
    icon: "fas fa-shopping-cart",
    gradient: "linear-gradient(135deg, #34d399, #059669)",
    image: "/images/project/ecommerce.png",
  },
  {
    id: 6,
    title: "Resume Builder",
    category: "Full-Stack",
    icon: "fas fa-file-pdf",
    gradient: "linear-gradient(135deg, #f87171, #ec4899)",
    image: "/images/project/Resume Builder app.png",
  },
  {
    id: 7,
    title: "Calculator Application",
    category: "Full-Stack",
    icon: "fas fa-calculator",
    gradient: "linear-gradient(135deg, #fbbf24, #f97316)",
    // image missing - falls back to gradient icon
  },
  {
    id: 12,
    title: "Karachi Port Vessel Tracker",
    category: "Full-Stack",
    icon: "fas fa-ship",
    gradient: "linear-gradient(135deg, #0ea5e9, #2563eb)",
    image: "/images/project/Karchi port vessel tracker.png",
  },
  {
    id: 8,
    title: "Frontend Development Showcase",
    category: "Full-Stack",
    icon: "fas fa-layer-group",
    gradient: "linear-gradient(135deg, #f472b6, #f43f5e)",
    video: "/videos/Frontend.mp4",
  },
  {
    id: 9,
    title: "Claude Code Projects",
    category: "Agentic AI",
    icon: "fas fa-brain",
    gradient: "linear-gradient(135deg, #a855f7, #ec4899)",
    video: "/videos/Claude_Code_s_Projects.mp4",
  },
  {
    id: 10,
    title: "n8n Automation Workflows",
    category: "Automation",
    icon: "fas fa-gears",
    gradient: "linear-gradient(135deg, #f59e0b, #10b981)",
    video: "/videos/n8n_projects.mp4",
  },
  {
    id: 11,
    title: "Lovable AI Projects",
    category: "Full-Stack",
    icon: "fas fa-heart",
    gradient: "linear-gradient(135deg, #f87171, #ec4899)",
    video: "/videos/Lovable_s_Projects.mp4",
  },
  {
    id: 13,
    title: "Q-Commerce Solution",
    category: "Full-Stack",
    icon: "fas fa-truck-fast",
    gradient: "linear-gradient(135deg, #22d3ee, #60a5fa)",
    image: "/images/project/ecommerce.png",
  },
  {
    id: 14,
    title: "OpenAI SDK Portfolio",
    category: "Agentic AI",
    icon: "fas fa-microchip",
    gradient: "linear-gradient(135deg, #2dd4bf, #10b981)",
    video: "/videos/OpenAI_SDK_Portfolio.mp4",
  },
]

export default function Projects() {
  return (
    <section id="projects" style={{ padding: '60px 0' }}>
      <div style={{ textAlign: 'center', marginBottom: '40px', padding: '0 24px' }}>
        <h2 style={{ fontSize: '2.25rem', fontWeight: 800, marginBottom: '12px' }}>
          My Projects
        </h2>
        <p style={{ color: '#7a6040', fontSize: '1.1rem' }}>
          A collection spanning e-commerce, AI, automation, and more
        </p>
      </div>

      <div style={{ overflow: 'hidden', position: 'relative' }}>
        {/* Fade edges */}
        <div className="projects-fade-left" style={{
          position: 'absolute', left: 0, top: 0, bottom: 0,
          background: 'linear-gradient(90deg, rgba(254,248,240,0.92), transparent)', zIndex: 2,
          pointerEvents: 'none',
        }}/>
        <div className="projects-fade-right" style={{
          position: 'absolute', right: 0, top: 0, bottom: 0,
          background: 'linear-gradient(-90deg, rgba(254,248,240,0.92), transparent)', zIndex: 2,
          pointerEvents: 'none',
        }}/>

        <div style={{
          display: 'flex',
          gap: '24px',
          width: 'max-content',
          animation: 'scrollLeft 35s linear infinite',
          paddingBottom: '12px',
          paddingLeft: '24px',
        }}
          onMouseEnter={e => e.currentTarget.style.animationPlayState = 'paused'}
          onMouseLeave={e => e.currentTarget.style.animationPlayState = 'running'}
        >
          {[...realProjects, ...realProjects].map((project, i) => (
            <div key={i} className="projects-card" style={{
              borderRadius: '20px',
              background: 'rgba(255,255,255,0.5)',
              backdropFilter: 'blur(20px) saturate(180%)',
              WebkitBackdropFilter: 'blur(20px) saturate(180%)',
              border: '1px solid rgba(255,255,255,0.85)',
              boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.95), 0 8px 24px rgba(0,0,0,0.07)',
              transition: 'transform 0.3s, box-shadow 0.3s',
            }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-8px) scale(1.02)'
                e.currentTarget.style.boxShadow = 'inset 0 1px 0 rgba(255,255,255,0.95), 0 20px 48px rgba(255,140,0,0.12)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)'
                e.currentTarget.style.boxShadow = 'inset 0 1px 0 rgba(255,255,255,0.95), 0 8px 24px rgba(0,0,0,0.07)'
              }}
            >
              {/* Thumbnail */}
              <div style={{ height: '180px', overflow: 'hidden', background: '#ede0ce', borderRadius: '20px 20px 0 0' }}>
                {project.video ? (
                  <video
                    src={project.video}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    autoPlay muted loop playsInline
                  />
                ) : project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    width={300}
                    height={180}
                    loading="lazy"
                    decoding="async"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                ) : (
                  <div style={{
                    width: '100%', height: '100%',
                    background: project.gradient,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <i className={project.icon} style={{ color: 'rgba(255,255,255,0.85)', fontSize: '3rem' }} />
                  </div>
                )}
              </div>

              {/* Info row */}
              <div style={{
                padding: '18px 20px',
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              }}>
                <div>
                  <h3 style={{ fontSize: '15px', fontWeight: '800',
                    color: '#1a0a00', marginBottom: '4px' }}>
                    {project.title}
                  </h3>
                  <p style={{ fontSize: '11px', color: 'rgba(180,90,0,0.9)', fontWeight: '600' }}>
                    {project.category}
                  </p>
                </div>
                <a href={project.liveUrl || project.githubUrl || '#'}
                  target="_blank" rel="noopener noreferrer"
                  style={{
                    width: '40px', height: '40px', borderRadius: '50%',
                    background: 'linear-gradient(135deg,#FF8C00,#FFD700)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: '#fff', fontSize: '16px', textDecoration: 'none',
                    boxShadow: '0 4px 12px rgba(255,140,0,0.4)',
                    transition: 'transform 0.2s',
                    flexShrink: 0,
                  }}
                  onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.2)'}
                  onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                >
                  ↗
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
