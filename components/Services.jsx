'use client'

import Link from 'next/link'
import { services } from '@/lib/siteData'

export default function Services({ showViewAll = true }) {
  return (
    <section id="services" className="py-16" style={{ background: 'transparent' }}>

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

      <p className="text-center text-sm text-gray-400 mb-10 px-6">
        From AI agents to full-stack web apps — solutions that solve real business problems
      </p>

      <div className="crystal-marquee" style={{ padding: '12px 0 20px' }}>
        <div className="crystal-track">
          {[...services, ...services].map((service, i) => {
            const hidden = i >= services.length
            return (
              <div key={`${service.slug}-${i}`} style={{ paddingRight: '32px' }} aria-hidden={hidden || undefined}>
                <div className="crystal-tile" style={{ width: '260px' }}>
                  <div className="crystal-frame crystal-glass" style={{ height: '325px' }}>
                    <img
                      src={service.image}
                      alt={hidden ? '' : service.title}
                      width={260}
                      height={325}
                      loading="eager"
                      decoding="async"
                    />
                    <span
                      className="crystal-shine"
                      style={{ animationDelay: `${(i % 6) * 1.1}s` }}
                    />
                  </div>
                  <div className="crystal-floor" style={{ marginTop: '6px' }} />
                  <div style={{ textAlign: 'center', paddingTop: '8px' }}>
                    <h3 className="crystal-title" style={{ fontSize: '15px', fontWeight: 800, marginBottom: '4px' }}>
                      {service.title}
                    </h3>
                    <p
                      style={{
                        fontSize: '12px',
                        lineHeight: 1.5,
                        color: 'rgba(26,10,0,0.6)',
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                      }}
                    >
                      {service.shortDescription}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {showViewAll && (
        <div className="text-center" style={{ marginTop: '28px' }}>
          <Link href="/services" className="gradient-button inline-block">
            Explore All Services →
          </Link>
        </div>
      )}
    </section>
  )
}
