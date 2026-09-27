'use client'

import Image from 'next/image'

const services = [
  { title: 'Chatbot Development',     img: '/images/services/chatbot.png',          cls: 'lv0'  },
  { title: 'Telegram Bot',            img: '/images/services/telegram-bot.png',      cls: 'lv1'  },
  { title: 'CRM & Social Media',      img: '/images/services/crm.png',               cls: 'lv2'  },
  { title: 'UI/UX Design',            img: '/images/services/uiux.png',              cls: 'lv3'  },
  { title: 'AI Agent',                img: '/images/services/ai-agent.png',          cls: 'lv4'  },
  { title: 'AI Automation',           img: '/images/services/ai-automation.png',     cls: 'lv5'  },
  { title: 'SaaS AI',                 img: '/images/services/saas-ai.png',           cls: 'lv6'  },
  { title: 'Portfolio Website',       img: '/images/services/portfolio.png',         cls: 'lv7'  },
  { title: 'Custom Dashboard',        img: '/images/services/custom-dashboard.png',  cls: 'lv8'  },
  { title: 'E-Commerce',              img: '/images/services/ecommerce.png',         cls: 'lv9'  },
  { title: 'n8n Automation',          img: '/images/services/n8n-automation.png',    cls: 'lv10' },
  { title: 'Mobile App',              img: '/images/services/mob-app.png',           cls: 'lv11' },
]

export default function Services() {
  return (
    <section id="services" className="py-16 px-6" style={{ background: 'transparent' }}>

      <h2
        className="text-3xl font-bold text-center mb-3"
        style={{
          background: 'linear-gradient(90deg, #FF8C00, #FFD700)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          animation: 'none',
        }}
      >
        Our Services
      </h2>

      <p className="text-center text-sm text-gray-400 mb-12">
        Comprehensive solutions tailored to your digital needs
      </p>

      <div className="services-image-grid grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 max-w-6xl mx-auto" style={{ gap: '32px', alignItems: 'start' }}>
        {services.map((service) => (
          <div
            key={service.title}
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', transition: 'all 0.3s ease' }}
            onMouseEnter={e => { e.currentTarget.style.filter = 'drop-shadow(0 0 14px rgba(249,115,22,0.45))'; e.currentTarget.style.transform = 'scale(1.06)' }}
            onMouseLeave={e => { e.currentTarget.style.filter = 'none'; e.currentTarget.style.transform = 'scale(1)' }}
          >
            <div className={service.cls} style={{ position: 'relative' }}>
              <div style={{ width: '160px', height: '160px', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                <Image
                  src={service.img}
                  alt={service.title}
                  width={160}
                  height={160}
                  unoptimized={true}
                  style={{ objectFit: 'contain', width: '160px', height: '160px', background: 'none' }}
                />
              </div>
              {/* Glow shadow under image */}
              <div style={{
                position: 'absolute', bottom: '-8px', left: '50%',
                transform: 'translateX(-50%)',
                width: '90px', height: '14px',
                background: 'radial-gradient(ellipse, rgba(249,115,22,0.2) 0%, transparent 70%)',
                filter: 'blur(5px)',
              }} />
            </div>
            <p style={{ fontSize: '12px', fontWeight: '600', textAlign: 'center', marginTop: '8px', color: '#1a0a00', width: '160px' }}>
              {service.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
