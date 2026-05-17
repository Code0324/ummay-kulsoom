'use client'

import Image from 'next/image'

const services = [
  {
    title: 'Chatbot Development',
    desc: 'Smart conversational bots for your business',
    img: '/images/services/chatbot.png',
  },
  {
    title: 'Telegram Bot',
    desc: 'Custom bots for Telegram automation',
    img: '/images/services/telegram-bot.png',
  },
  {
    title: 'CRM & Social Media Marketing',
    desc: 'Manage leads and grow your audience',
    img: '/images/services/crm.png',
  },
  {
    title: 'UI/UX Design',
    desc: 'Beautiful, user-friendly interface design',
    img: '/images/services/uiux.png',
  },
  {
    title: 'AI Agent',
    desc: 'Autonomous AI agents for complex tasks',
    img: '/images/services/ai-agent.png',
  },
  {
    title: 'AI Automation',
    desc: 'Streamline workflows with intelligent automation',
    img: '/images/services/ai-automation.png',
  },
  {
    title: 'SaaS AI',
    desc: 'AI-powered SaaS solutions built for scale',
    img: '/images/services/saas-ai.png',
  },
  {
    title: 'Portfolio Website',
    desc: 'Stunning personal portfolio websites',
    img: '/images/services/portfolio.png',
  },
  {
    title: 'Custom Dashboard',
    desc: 'Data-driven dashboards for actionable insights',
    img: '/images/services/custom-dashboard.png',
  },
  {
    title: 'E-Commerce',
    desc: 'Full-featured online store solutions',
    img: '/images/services/ecommerce.png',
  },
  {
    title: 'n8n Workflow Automation',
    desc: 'No-code automation pipelines with n8n',
    img: '/images/services/n8n-automation.png',
  },
  {
    title: 'Mobile App',
    desc: 'Cross-platform mobile app development',
    img: '/images/services/mob-app.png',
  },
]

export default function Services() {
  return (
    <section
      id="services"
      className="py-20 px-6"
      style={{ background: 'linear-gradient(180deg, #0f0f1a 0%, #1a0a2e 100%)' }}
    >
      {/* Section title — orange-to-yellow gradient */}
      <h2
        className="text-center text-4xl font-black mb-3"
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

      <p
        className="text-center mb-12 text-base"
        style={{ color: 'rgba(255,255,255,0.55)' }}
      >
        Comprehensive solutions tailored to your digital needs
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {services.map((service, i) => (
          <div
            key={service.title}
            className="service-card group bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-4 transition-all duration-300 hover:scale-105 hover:border-orange-400/60 hover:shadow-lg hover:shadow-orange-500/20 cursor-default"
            style={{ animationDelay: `${i * 80}ms` }}
          >
            <div className="rounded-xl overflow-hidden mb-4 aspect-square">
              <Image
                src={service.img}
                alt={service.title}
                width={400}
                height={400}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
