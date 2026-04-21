'use client'

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechVentures",
      title: "CEO",
      text: "Ummay delivered exceptional multi-platform API integrations that exceeded all expectations. Her attention to OAuth security and automation made everything smooth and reliable.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      company: "GrowthScale",
      title: "Founder",
      text: "Working with Ummay on our automation system was a game-changer. The workflows she built saved us 30+ hours per week. Highly recommended!",
      rating: 5,
    },
    {
      name: "Emily Parker",
      company: "FinFlow",
      title: "Head of Operations",
      text: "The AI-powered invoice and accounting system Ummay developed is outstanding. Clean architecture, perfect error handling, and it just works flawlessly.",
      rating: 5,
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">What Customers Say</h2>
          <p className="text-xl" style={{ color: '#7a6040' }}>Real feedback from amazing people I've worked with</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="glass-effect rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {/* Stars */}
              <div className="flex items-center mb-4">
                <div className="flex space-x-1" style={{ color: '#FF8C00' }}>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <i key={i} className="fas fa-star"></i>
                  ))}
                </div>
              </div>

              {/* Testimonial Text */}
              <p className="mb-6 leading-relaxed italic" style={{ color: '#5a3800' }}>
                &ldquo;{testimonial.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center space-x-4 pt-6" style={{ borderTop: '1px solid rgba(255,180,0,0.2)' }}>
                {/* Glossy 3D sphere avatar */}
                <div style={{
                  width: '52px', height: '52px',
                  borderRadius: '50%',
                  background: `radial-gradient(circle at 35% 35%,
                    rgba(255,255,255,0.9) 0%,
                    #FF9500 30%,
                    #FF6B00 65%,
                    #cc4400 100%)`,
                  flexShrink: 0,
                  boxShadow: `
                    inset 0 3px 6px rgba(255,255,255,0.6),
                    inset 0 -3px 5px rgba(0,0,0,0.3),
                    0 8px 20px rgba(255,140,0,0.45),
                    0 3px 6px rgba(0,0,0,0.1)
                  `,
                  position: 'relative',
                  overflow: 'hidden',
                }}>
                  {/* Gloss highlight */}
                  <div style={{
                    position: 'absolute',
                    top: '8%', left: '14%',
                    width: '35%', height: '28%',
                    background: 'radial-gradient(ellipse, rgba(255,255,255,0.85) 0%, transparent 100%)',
                    borderRadius: '50%',
                  }} />
                  {/* Reviewer initials */}
                  <div style={{
                    position: 'absolute', inset: 0,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '14px', fontWeight: '800',
                    color: 'rgba(255,255,255,0.9)', WebkitTextFillColor: 'rgba(255,255,255,0.9)',
                    textShadow: '0 1px 3px rgba(0,0,0,0.3)',
                  }}>
                    {testimonial.name?.charAt(0) || 'U'}
                  </div>
                </div>

                <div>
                  <p className="font-bold" style={{ color: '#2d1f00', WebkitTextFillColor: '#2d1f00' }}>
                    {testimonial.name}
                  </p>
                  <p className="text-sm" style={{ color: '#7a4500' }}>
                    {testimonial.title}, {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
