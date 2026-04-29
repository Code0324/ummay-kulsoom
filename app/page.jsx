'use client'

import Hero from '@/components/Hero'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import Services from '@/components/Services'
import Testimonials from '@/components/Testimonials'
import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <Hero />

      {/* About */}
      <About />

      {/* Projects Carousel */}
      <Projects />

      {/* Quick Stats */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              ['20+', 'Projects Completed'],
              ['15+', 'Happy Clients'],
              ['12+', 'Technologies'],
              ['4+', 'Years Experience'],
            ].map(([num, label]) => (
              <div key={label} className="stat-card rounded-2xl p-6 text-center">
                <div className="text-4xl font-bold gradient-text">{num}</div>
                <p className="mt-2" style={{ color: '#a05000' }}>{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills — Animated Circular Rings */}
      <Skills />

      {/* Services — Glassmorphism Cards */}
      <Services showViewAll={true} limit={4} />

      {/* Testimonials */}
      <Testimonials />

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="cta-heading font-bold mb-6">Ready to Build Something Great?</h2>
          <p className="cta-subtext mb-8" style={{ color: '#7a6040' }}>
            Let's collaborate on your next project. Get in touch today!
          </p>
          <Link
            href="/contact"
            className="gradient-button font-bold text-lg inline-block"
          >
            Start a Project →
          </Link>
        </div>
      </section>
    </main>
  )
}
